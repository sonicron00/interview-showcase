<?php

namespace App\Http\Controllers;

use App\Services\QuestionService;


/*
 * No extension or inheritance
 * Singular resource name
 */
class QuestionController
{
    public function __construct(private readonly QuestionService $questionService)
    {
    }

    public function getQuestions(): array
    {
        return $this->questionService->getAllQuestions();
    }

}