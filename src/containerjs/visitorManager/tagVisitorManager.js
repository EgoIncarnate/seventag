/**
 * Copyright (C) 2015 Digimedia Sp. z.o.o. d/b/a Clearcode
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distrubuted in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
'use strict';

(function($sevenTag, MANAGER) {

    var VisitorsCollection = function() {
        return Array.prototype.slice.call(arguments);
    };

    VisitorsCollection.$inject = [
        '$doNotTrackVisitor',
        '$optOutVisitor'
    ];

    var TagVisitorManagerFactory = function (VisitorManager, $visitorsCollection, $visitorStrategy) {

        var manager = new VisitorManager($visitorStrategy);
        for(var visitor in $visitorsCollection) {
            manager.add($visitorsCollection[visitor]);
        }

        return manager;
    };

    TagVisitorManagerFactory.$inject = [
        'VisitorManager',
        '$tagVisitorManagerVisitorsCollection',
        'TagVisitorStrategy'
    ];

    $sevenTag.service(MANAGER + 'VisitorsCollection', VisitorsCollection);
    $sevenTag.service(MANAGER, TagVisitorManagerFactory);

})(window.sevenTag, '$tagVisitorManager');
