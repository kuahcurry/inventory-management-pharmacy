<?php

$sqlPath = 'dummy_data_min20.sql';
if (!file_exists($sqlPath)) {
    die("File $sqlPath not found.\n");
}

$content = file_get_contents($sqlPath);

// Perform replacements
$replacements = [
    'DATE_SUB(CURDATE(), INTERVAL (MOD(n.n, 10) + 2) DAY)' => 'ADDDATE(CURDATE(), -((n.n % 10) + 2))',
    'DATE_SUB(CURDATE(), INTERVAL (MOD(n.n, 7) + 2) DAY)' => 'ADDDATE(CURDATE(), -((n.n % 7) + 2))',
    'DATE_SUB(CURDATE(), INTERVAL (MOD(n.n, 20) + 2) DAY)' => 'ADDDATE(CURDATE(), -((n.n % 20) + 2))',
    'DATE_SUB(@today, INTERVAL MOD(n.n, 7) DAY)' => 'ADDDATE(@today, -(n.n % 7))',
];

$count = 0;
foreach ($replacements as $search => $replace) {
    $content = str_replace($search, $replace, $content, $thisCount);
    $count += $thisCount;
    echo "Replaced '$search' -> '$replace' ($thisCount times)\n";
}

file_put_contents($sqlPath, $content);
echo "Total replacements: $count\nDone!\n";
