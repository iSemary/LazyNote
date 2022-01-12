<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotesTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('tag_id')->nullable();
            $table->string('title');
            $table->string('body');
            $table->bigInteger('public')->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('notes');
    }
}
