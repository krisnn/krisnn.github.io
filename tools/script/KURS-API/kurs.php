<?php

/* Just for fun code by ibacor.com */

// Menyembunyikan pesan error karena proses DOM yang tidak sempurna 
error_reporting(0);

function ayoCurl($bank, $url, $td, $field1, $field2, $user_agent = "Googlebot/2.1 (http://www.googlebot.com/bot.html)")
{
    $url = $url;
    $ch = curl_init();
	
	curl_setopt($ch, CURLOPT_USERAGENT, $user_agent);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_ENCODING, "gzip");
	
	// jika website yd di curl sedang offline
	if(!$content = curl_exec($ch)){
		$arrai = array(
			"bank" => $bank,
			"status" => "offline",
			"kurs" => array()
		);
		return $arrai;
	}
	
	// ternyata website yd di curl sedang online
	else{
		curl_close($ch);
		$dom = new DOMDocument;
		$dom->loadHTML($content);
		$rows = array();
		foreach ($dom->getElementsByTagName('tr') as $tr) {
			$cells = array();
			foreach ($tr->getElementsByTagName('td') as $r) {
				$cells[] = $r->nodeValue;
			}
			$rows[] = $cells;
		}		
		
		$jual = preg_replace('/\s+/', '', $rows[$td][$field1]);
		$beli = preg_replace('/\s+/', '', $rows[$td][$field2]);
		
		if(substr($jual, -3) == ".00"){
			$jual = str_replace(".00", "", $jual);
		}else if(substr($jual, -3) == ",00"){
			$jual = str_replace(",00", "", $jual);
		}
		
		if(substr($beli, -3) == ".00"){
			$beli = str_replace(".00", "", $beli);
		}else if(substr($beli, -3) == ",00"){
			$beli = str_replace(",00", "", $beli);
		}
		
		$search  = array(",", ".");
		$replace = array("", "");
		$jual = str_replace($search, $replace, $jual);
		$beli = str_replace($search, $replace, $beli);
		
		$arrai = array(
			"bank" => $bank,
			"status" => "online",
			"kurs" => array(
				"mata_uang" => "USD",
				"jual" => $jual,
				"beli" => $beli
			)
		);
		return $arrai;
	}
}

function curl(){
	
	$data = array();
	$data[] = ["bank" => "bi", "url" => "https://www.bi.go.id/id/moneter/informasi-kurs/transaksi-bi/Default.aspx",	"td" => "32", "field1" => "2", "field2" => "3"];
	$data[] = ["bank" => "bca", "url" => "https://www.bca.co.id/id/Individu/Sarana/Kurs-dan-Suku-Bunga/Kurs-dan-Kalkulator",	"td" => "2", "field1" => "1", "field2" => "2"];
	$data[] = ["bank" => "mandiri", "url" => "https://www.bankmandiri.co.id/web/guest/kurs", "td" => "16", "field1" => "2", "field2" => "1"];
	$data[] = ["bank" => "bni", "url" => "https://www.bni.co.id/en-us/home/forexinformation", "td" => "1", "field1" => "1", "field2" => "2"];
	$data[] = ["bank" => "bri", "url" => "https://eform.bri.co.id/info/kurs", "td" => "12", "field1" => "2", "field2" => "3"];
	$data[] = ["bank" => "danamon", "url" => "https://www.danamon.co.id/id/Kurs-Details", "td" => "1", "field1" => "2", "field2" => "1"];
	$data[] = ["bank" => "banksinarmas", "url" => "https://www.banksinarmas.com/id/kurs", "td" => "1", "field1" => "3", "field2" => "2"];
	$data[] = ["bank" => "btn", "url" => "https://www.btn.co.id/currency-calculator", "td" => "1", "field1" => "2", "field2" => "4"];
	$data[] = ["bank" => "mega", "url" => "https://www.bankmega.com/id/bisnis/treasury/", "td" => "2", "field1" => "1", "field2" => "2"];
	$data[] = ["bank" => "bjb", "url" => "https://www.bankbjb.co.id/ina", "td" => "6", "field1" => "2", "field2" => "1"];	
	$data[] = ["bank" => "maybank", "url" => "https://www.maybank.co.id/Business/forexrate", "td" => "3", "field1" => "2", "field2" => "1"];
	
	/* Sobat bisa menambahkan lagi daftar bank yang akan di cURL ^^
	$data[] = ["bank" => "nama bank", "url" => "url bank yang akan di cURL", "td" => "array td ke", "field1" => "array field ke di dalam td (jual)", "field2" => "array field ke di dalam td (beli)"];
	*/
	
	return $data;
	
}

function bank(){

	$curl = curl();
	
	$data = array();

	foreach($curl as $cr){
		$url_kurs = 'http://'.$_SERVER[HTTP_HOST].$_SERVER[REQUEST_URI].'?bank='.$cr['bank'];
		$data['data'][] = array(
			"bank" => $cr['bank'],
			"url_kurs" => $url_kurs
		);
	}
	
	$data['data'][] = array(
		"bank" => "all",
		"url_kurs" => 'http://'.$_SERVER[HTTP_HOST].$_SERVER[REQUEST_URI].'?bank=all'
	);
	
	return $data;

}

function kurs($bank = ""){

	$curl = curl();
	
	$data = array(
		"date" => date("d/m/Y")
	);

	foreach($curl as $cr){
		if($cr['bank'] == $bank){
			$data['data'][] = ayoCurl($cr['bank'], $cr['url'], $cr['td'], $cr['field1'], $cr['field2']);
		}else if($bank == "all"){
			$data['data'][] = ayoCurl($cr['bank'], $cr['url'], $cr['td'], $cr['field1'], $cr['field2']);
		}
	}	
	
	return $data;

}
