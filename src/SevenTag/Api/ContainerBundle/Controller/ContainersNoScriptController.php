<?php
/**
 * Copyright (C) 2015 Digimedia Sp. z o.o. d/b/a Clearcode
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

namespace SevenTag\Api\ContainerBundle\Controller;

use FOS\RestBundle\Controller\Annotations\Get;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use SevenTag\Api\AppBundle\Controller\RestController;
use SevenTag\Component\Container\Model\ContainerInterface;
use Sonata\NotificationBundle\Backend\BackendInterface;
use Symfony\Component\HttpFoundation\Request;

class ContainersNoScriptController extends RestController
{
    /**
     * @ParamConverter(
     *      "container",
     *      class="SevenTagContainerBundle:Container",
     *      converter="versionable_converter"
     * )
     * @Get("/containers/{id}/noscript.html", requirements={"id": "\d+"})
     *
     * @param Request $request
     * @param ContainerInterface $container
     *
     * @return array
     */
    public function getNoScriptAction(Request $request, ContainerInterface $container)
    {
        $noScript = $this->get('seven_tag_container.no_script.handler.no_script_handler');
        $noScript->handle($request, $container);

        return $container;
    }
}
