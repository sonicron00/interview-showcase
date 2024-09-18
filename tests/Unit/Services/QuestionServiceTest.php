<?php

namespace Tests\Unit\Services;

use App\Repositories\QuestionRepository;
use App\Services\QuestionService;
use PHPUnit\Framework\TestCase;
use Illuminate\Support\Collection;

class QuestionServiceTest extends TestCase
{
    private QuestionRepository $questionRepo;
    private QuestionService $questionService;

    protected function setUp(): void
    {
        $this->questionRepo = $this->createMock(QuestionRepository::class);
        $this->questionService = new QuestionService($this->questionRepo);
    }

    public function testGetAllQuestionsReturnsArray()
    {
        $expectedQuestions = new Collection([
                                                ['id' => 1, 'question' => 'What is PHP?'],
                                                ['id' => 2, 'question' => 'What is Laravel?'],
                                            ]);

        $this->questionRepo->method('all')
            ->willReturn($expectedQuestions);

        $result = $this->questionService->getAllQuestions();

        $this->assertIsArray($result);
        $this->assertEquals($expectedQuestions->toArray(), $result);
    }
}
