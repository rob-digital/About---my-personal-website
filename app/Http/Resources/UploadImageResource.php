<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UploadImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'created_at' => $this->created_at,
            'name,'      => $this->name,
            'category1'      => $this->category1,
            'category2'      => $this->category2,
            'category3'      => $this->category3,
            'category4'      => $this->category4,
            'category5'      => $this->category5,
            'file_path'  => $this->file_path        ];
    }
}
