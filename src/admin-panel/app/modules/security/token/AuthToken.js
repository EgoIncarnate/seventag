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

/**
 * @name AuthToken
 *
 * @author Arek Zając <a.zajac@clearcode.cc>
 */
class AuthToken {

    constructor () {

        /**
         * @type {string}
         */
        this.accessToken = undefined;

        /**
         * @type {number}
         */
        this.expiresIn = undefined;

        /**
         * @type {string}
         */
        this.tokenType = undefined;

        /**
         * @type {string}
         */
        this.scope = undefined;

        /**
         * @type {string}
         */
        this.refreshToken = undefined;

    }

}

export default AuthToken;
