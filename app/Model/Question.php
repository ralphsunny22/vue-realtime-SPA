<?php

namespace App\Model;

use App\User;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Question extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class)->latest();
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($question) {
            $question->slug = Str::slug($question->title);
        });

        static::updating(function ($question) {
            $question->slug = Str::slug($question->title);
        });
    }

    protected $guarded = [];

    public function getPathAttribute()
    {
        return asset("api/question/$this->slug");
        //return "/question/$this->slug";
    }
}
