<?php
require 'vendor/autoload.php';
$app = require 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

try {
    DB::unprepared(file_get_contents('dummy_data_min20.sql'));
    echo "SQL Executed Successfully!\n";
} catch (\Exception $e) {
    echo "SQL Execution Failed: " . $e->getMessage() . "\n";
}
