<?php
include '../tikijne_tariff.php';

if (isset($_GET['q'])) {
	if (isset($_GET['ind']) and $_GET['ind'] == 'o') {
		try {
			echo tikijne_tariff::origins($_GET['q']);
		} catch(Exception $e) {
			echo 'Terdapat kesalahan: '.$e->getMessage();
		}
	} else {
		try {
			echo tikijne_tariff::destinations($_GET['q']);
		} catch(Exception $e) {
			echo 'Terdapat kesalahan: '.$e->getMessage();
		}
	}
	// hentikan eksekusi skrip agar halaman html tidak ditampilkan
	exit; 
}

if ($_POST) {
  extract($_POST);
	$daftar_tarif = tikijne_tariff::tarif($origin_code, $destination_code, $weight);
	
  $result = '<ul>';
	foreach ($daftar_tarif as $tarif) {
		list ($tipe, $desk, $biaya) = $tarif;
		$result .= '<li><input type="radio" name="tariff_type" value="'.$tipe.'" />
                <strong>'.$tipe.': '.$biaya.'</strong></li>';
	}
	$result .= '</ul>';
}
?>
<!DOCTYPE html>
<html>
<html lang="id">
<head>
  <meta charset=utf-8>
	<title>Form lengkap seperti pada website http://www.tikijne.co.id/</title>
	<meta name="description" value="Membuat pengecekan tarif pengiriman seperti website www.tikijne.co.id" />
	<link rel="stylesheet" href="assets/autocomplete.css" />
	<style>label{display:block;font-size:10px;text-transform:uppercase}</style>
</head>
<body>
<?php echo isset($result) ? $result : ''?>
<form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
	<p>	<label for="origin">Dari:</label>
		<input type="text" name="from" id="origin" size="50" value="<?php echo @$_POST['from']?>"/>
		<input type="hidden" name="origin_code" id="origin_code" type="hidden"/>
	</p>
	<p>	<label for="destination">Ke:</label>
		<input type="text" name="to" id="destination" size="50" value="<?php echo @$_POST['to']?>"/>
		<input type="hidden" name="destination_code" id="destination_code"/>
	</p>
	<p>	<label for="weight">Berat (Kg):</label>
		<input type="text" name="weight" id="weight" size="5" value="<?php echo @$_POST['weight']?>"/> 
	</p>
	<p>	<input type="submit" value="Cek" />
	</p>
</form>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"></script>
<script src="assets/autocomplete.js"></script>
<script src="assets/tarif.js"></script>
</body>
</html>