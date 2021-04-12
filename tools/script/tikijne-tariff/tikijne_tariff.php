<?php
/**
 * Mendapatkan data tarif pengiriman barang dari http://www.jne.co.id/.
 *
 * @version   0.0.2
 * @author    Anggiajuang Patria <anggiaj@segellabs.com>
 * @copyright (c) 2009-2010 http://segellabs.com/
 * @license   http://www.gnu.org/licenses/gpl-3.0.txt
 **/
class tikijne_tariff
{
	const URL_CODE = 'http://www.jne.co.id/tariff.php';
	const URL_TARIF = 'http://www.jne.co.id/index.php?mib=tariff&amp;lang=IN';
	
	/**
	 * Mendapatkan daftar lokasi pengirim barang. 
	 *
	 * @param	string	query lokasi pengirim barang.
	 * @return	string
	 **/
	public static function origins($query)
	{
		$url = tikijne_tariff::URL_CODE.'?ind=o&q='.$query;
		if (!$origins = file($url)) {
			throw new Exception('Tidak dapat mengambil data dari: '.$url);
		} else {
			return implode("\n", $origins);
		}
	}
	
	/**
	 * Mendapatkan daftar lokasi penerima barang. 
	 *
	 * @param	string	query lokasi penerima barang.
	 * @return	string
	 **/
	public static function destinations($query)
	{
		$url = tikijne_tariff::URL_CODE.'?q='.$query;
		if (!$destinations = file($url)) {
			throw new Exception('Tidak dapat mengambil data dari: '.$url);
		} else {
			return implode("\n", $destinations);
		}
	}
	
	/**
	 * Mendapatkan daftar biaya pengiriman. 
	 *
	 * @param	string	kode lokasi pengirim barang.
	 * @param	string	kode lokasi penerima barang.	
	 * @param	int		berat barang.
	 * @return	array
	 **/
	public static function tarif($origin_code, $destination_code, $weight)
	{
		$fields = 	'origin_code='.urlencode($origin_code)
                .'&destination_code='.urlencode($destination_code)
                .'&weight='.$weight;
		
		$ch = curl_init(tikijne_tariff::URL_TARIF);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		
		if (!$result = curl_exec($ch)) {
			throw new Exception('Tidak dapat mengambil data dari: '.tikijne_tariff::URL_TARIF);
		} else {
			curl_close($ch);

			// ambil variabel data tarif
			$result = explode("<tr class='trfC'>", $result);
			$last = count($result)-1;
			unset($result[0]);
			$result[$last] = explode("</table>", $result[$last]);
			$result[$last] = $result[$last][0]; 
			
			$tag = array('<td>', '</td>', '</tr>');
			foreach ($result as &$str) {
				$str = str_replace($tag, '', $str);
				$str = explode(' ', $str);
				//unset($str[1]);
				$str[2] = trim(str_replace(array(',', '.00'), '', $str[2]));
				ksort($str);
			}

			return $result;
		}
	}
}