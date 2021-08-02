<?php


namespace AppBundle\Controller\Renderlets;


use AppBundle\Controller\BaseController;
use AppBundle\Repositories\ImageGalleryRepository;
use Symfony\Component\HttpFoundation\Request;

class GalleryController extends BaseController
{

    private $imageGalleryRepository;

    public function __construct(ImageGalleryRepository $imageGalleryRepository)
    {
        $this->imageGalleryRepository = $imageGalleryRepository;
    }

    public function galleryAction(Request $request) {

        return [
            'gallery' => $this->imageGalleryRepository->getImageGallery($request->get('id'))
        ];
    }

}
