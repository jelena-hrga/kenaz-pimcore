<?php


namespace AppBundle\Repositories;


use Pimcore\Model\DataObject\Post;

class PostRepository
{
    /**
     * @param $id
     * @return \Pimcore\Model\DataObject\AbstractObject|\Pimcore\Model\DataObject\Concrete|Post|null
     */
    public function getPost($id) {
        return Post::getById($id);
    }
}
