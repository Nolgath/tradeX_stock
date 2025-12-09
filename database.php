<?php 
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $db = 'stock_tradex';

    $pdo = new PDO("mysql:host={$host};dbname={$db}",$user,$password);

   // Data to insert
    // $cars = [
    //     [
    //         'Rechnungstage' => 10, 'Standtage' => 5, 'Standort' => 'Berlin',
    //         'Hersteller' => 'BMW', 'Modell' => 'X5', 'Ausstattungslinie' => 'Luxury',
    //         'bezahlt_am' => '2025-11-01', 'bezahlt' => 'Yes', 'Dokumenteneingang' => '2025-10-25',
    //         'Erstzulassung' => '2023-05-12', 'km' => 12000, 'kw' => 250, 'PS' => 340,
    //         'Hubraum' => 3000, 'Kraftstoffart' => 'Benzin', 'FIN' => 'WB12345ABC6789012',
    //         'Farbe' => 'Schwarz', 'EK_Netto' => 50000.00, 'Lieferant' => 'Autohaus Berlin',
    //         'Land_des_Lieferanten' => 'Germany', 'Link_Backend' => 'backend_link_1'
    //     ],
    //     [
    //         'Rechnungstage' => 8, 'Standtage' => 3, 'Standort' => 'Munich',
    //         'Hersteller' => 'Audi', 'Modell' => 'A6', 'Ausstattungslinie' => 'Sport',
    //         'bezahlt_am' => '2025-11-03', 'bezahlt' => 'Yes', 'Dokumenteneingang' => '2025-10-28',
    //         'Erstzulassung' => '2022-08-20', 'km' => 25000, 'kw' => 180, 'PS' => 245,
    //         'Hubraum' => 2000, 'Kraftstoffart' => 'Diesel', 'FIN' => 'WA12345XYZ6789013',
    //         'Farbe' => 'Weiß', 'EK_Netto' => 42000.00, 'Lieferant' => 'Audi Zentrum',
    //         'Land_des_Lieferanten' => 'Germany', 'Link_Backend' => 'backend_link_2'
    //     ],
    //     [
    //         'Rechnungstage' => 12, 'Standtage' => 7, 'Standort' => 'Hamburg',
    //         'Hersteller' => 'Mercedes', 'Modell' => 'C200', 'Ausstattungslinie' => 'Elegance',
    //         'bezahlt_am' => '2025-11-05', 'bezahlt' => 'No', 'Dokumenteneingang' => '2025-11-01',
    //         'Erstzulassung' => '2021-03-15', 'km' => 30000, 'kw' => 150, 'PS' => 204,
    //         'Hubraum' => 1800, 'Kraftstoffart' => 'Benzin', 'FIN' => 'WDB12345DEF6789014',
    //         'Farbe' => 'Blau', 'EK_Netto' => 38000.00, 'Lieferant' => 'Mercedes Hamburg',
    //         'Land_des_Lieferanten' => 'Germany', 'Link_Backend' => 'backend_link_3'
    //     ],
    //     [
    //         'Rechnungstage' => 15, 'Standtage' => 10, 'Standort' => 'Cologne',
    //         'Hersteller' => 'Volkswagen', 'Modell' => 'Golf', 'Ausstattungslinie' => 'Comfort',
    //         'bezahlt_am' => '2025-11-07', 'bezahlt' => 'Yes', 'Dokumenteneingang' => '2025-11-02',
    //         'Erstzulassung' => '2020-07-10', 'km' => 45000, 'kw' => 110, 'PS' => 150,
    //         'Hubraum' => 1400, 'Kraftstoffart' => 'Diesel', 'FIN' => 'WV12345GHI6789015',
    //         'Farbe' => 'Rot', 'EK_Netto' => 25000.00, 'Lieferant' => 'VW Köln',
    //         'Land_des_Lieferanten' => 'Germany', 'Link_Backend' => 'backend_link_4'
    //     ]
    // ];

// Prepare statement
    // $sql = "INSERT INTO cars 
    // (`Rechnungstage`, `Standtage`, `Standort`, `Hersteller`, `Modell`, `Ausstattungslinie`, 
    // `bezahlt am`, `bezahlt`, `Dokumenteneingang`, `Erstzulassung`, `km`, `kw`, `PS`, `Hubraum`, 
    // `Kraftstoffart`, `FIN`, `Farbe`, `EK Netto`, `Lieferant`, `Land des Lieferanten`, `Link Backend`) 
    // VALUES 
    // (:Rechnungstage, :Standtage, :Standort, :Hersteller, :Modell, :Ausstattungslinie, 
    // :bezahlt_am, :bezahlt, :Dokumenteneingang, :Erstzulassung, :km, :kw, :PS, :Hubraum, 
    // :Kraftstoffart, :FIN, :Farbe, :EK_Netto, :Lieferant, :Land_des_Lieferanten, :Link_Backend)";

    // $stmt = $pdo->prepare($sql);

    // // Execute loop
    // foreach ($cars as $car) {
    //     $stmt->execute($car);
    // }

    // echo "4 cars inserted successfully!";

    print("hii");
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);
    
    if($data){
        print("truthy");
    }else{
        print("falsy");
        
    }
    
    print("byeee");

    // print("<pre>");
    // print_r($data);
    // print("</pre>");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

