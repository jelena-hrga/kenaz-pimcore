<?php


namespace AppBundle\Controller;


use AppBundle\Repositories\CategoryRepository;
use AppBundle\Repositories\NewsRepository;
use AppBundle\Repositories\TagRepository;
use AppBundle\Repositories\TvRepository;
use AppBundle\Website\LinkGenerator\NewsLinkGenerator;
use AppBundle\Website\LinkGenerator\TagLinkGenerator;
use Pimcore\Config\Config;
use Pimcore\Model\DataObject\Category;
use Pimcore\Model\DataObject\Tag;
use Pimcore\Templating\Helper\HeadTitle;
use Pimcore\Templating\Helper\Placeholder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends BaseController
{
    const PER_PAGE_RESULTS = 10;

    private $categoryRepository, $newsRepository, $tagRepository, $tvRepository;

    public function __construct(CategoryRepository $categoryRepository, NewsRepository $newsRepository, TagRepository $tagRepository, TvRepository $tvRepository)
    {
        $this->categoryRepository = $categoryRepository;
        $this->newsRepository = $newsRepository;
        $this->tagRepository = $tagRepository;
        $this->tvRepository = $tvRepository;
    }

    /**
     * @Route("{path}/{categorytitle}~c{category}", name="category-detail", defaults={"path"=""}, requirements={"path"=".*?", "categorytitle"="[\w-]+", "category"="\d+"})
     *
     * @param Request $request
     * @param HeadTitle $headTitle
     * @param Placeholder $placeholderHelper
     * @param TagLinkGenerator $tagLinkGenerator
     * @param Config $websiteConfig
     * @return array
     */
    public function showAction(Request $request, HeadTitle $headTitle, Placeholder $placeholderHelper, TagLinkGenerator $tagLinkGenerator, Config $websiteConfig) {
        $category = Category::getById($request->get('category'));

        $sidebarnews = $this->newsRepository->getNewsFromCategory(43);
        $news = $this->newsRepository->getNewsFromCategory(27);
        $footernews = $this->newsRepository->getNewsFromCategory(70);
        $tags = $this->tagRepository->getTags(56);

        // $this->editmode && dodano dolje
        if (empty($request->get('category'))) {
            $categoryListing = new Category\Listing;
            $categoryListing->setLimit(1);
            $category = $categoryListing->current();
        }

        if (!($category instanceof Category && ($category->isPublished() || $this->verifyPreviewRequest($request, $category)))) {
            throw new NotFoundHttpException('Category not found.');
        }

        $headTitle($category->getTitle());

        $posts = $this->categoryRepository->getCategoryPosts($category,
            $request->get('page', 1),
            $request->get('limit', $websiteConfig->get('newsPerPageResults', self::PER_PAGE_RESULTS))
        );

        return [
            'category' => $category,
            'posts' => $posts,
            'sidebarnews' => $sidebarnews,
            'news' => $news,
            'footernews' => $footernews,
            'tags' => $tags,
            'video' => $this->tvRepository->getTopVideo($request)
        ];
    }
}
