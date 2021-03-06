<?php


namespace AppBundle\Repositories;


use Pimcore\Model\DataObject\Category;
use Zend\Paginator\Paginator;

class CategoryRepository
{
    /**
     * @param Category $category
     * @param $page
     * @param $limit
     *
     * @return Paginator
     */
    public function getCategoryPosts($category, $page, $limit) {
        $newsListing = new \Pimcore\Model\DataObject\Post\Listing();
        $newsListing->setOrderKey("publishDate");
        $newsListing->setOrder("desc");
        $newsListing->setCondition('category like ?', ['%' . $category->getId() . '%']);

        $paginator = new Paginator($newsListing);
        $paginator->setCurrentPageNumber($page);
        $paginator->setItemCountPerPage($limit);

        return $paginator;
    }
}
