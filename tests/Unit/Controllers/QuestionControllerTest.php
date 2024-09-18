<?php

namespace Tests\Unit\Controllers;

use App\Http\Controllers\QuestionController;
use App\Services\QuestionService;
use PHPUnit\Framework\TestCase;

class QuestionControllerTest extends TestCase
{
    private QuestionService $questionService;
    private QuestionController $questionController;

    protected function setUp(): void
    {
        $this->questionService = $this->createMock(QuestionService::class);
        $this->questionController = new QuestionController($this->questionService);
    }

    public function testGetQuestionsReturnsArray()
    {
        $expectedQuestions = [
            ['id' => 1, 'question' => 'What is PHP?'],
            ['id' => 2, 'question' => 'What is Laravel?'],
        ];

        $this->questionService->method('getAllQuestions')
            ->willReturn($expectedQuestions);

        $result = $this->questionController->getQuestions();

        $this->assertIsArray($result);
        $this->assertEquals($expectedQuestions, $result);
    }
}
