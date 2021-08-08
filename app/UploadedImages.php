<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UploadedImages extends Model
{
    protected $fillable = ['name', 'category1', 'category2', 'category3', 'category4', 'category5', 'file_path'];
}
