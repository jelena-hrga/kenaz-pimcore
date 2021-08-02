<?php


namespace AppBundle\Controller\Renderlets;


use AppBundle\Controller\BaseController;
use AppBundle\Repositories\TvRepository;
use Symfony\Component\HttpFoundation\Request;

class TvController extends BaseController
{
    private $tvRepository;

    public function __construct(TvRepository $tvRepository)
    {
        $this->tvRepository = $tvRepository;
    }

    public function tvAction(Request $request) {
        return [
            'video' => $this->tvRepository->getTopVideo($request)
        ];
    }
}
