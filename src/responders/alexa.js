/**
 * Copyright © 2018 Elastic Path Software Inc. All rights reserved.
 *
 * This is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this license. If not, see
 *
 *     https://www.gnu.org/licenses/
 *
 *
 */

const matcher = /^https:\/\/([A-Za-z0-9])+\.amazon.com\/spa\/skill\/account-linking-status\.html/;

class AlexaResponder {
  static canRespond(state) {
    const { params } = state;
    return params && params.has('redirect_uri') && params.has('state') && matcher.test(params.get('redirect_uri'));
  }

  static constructResponseUri(state, token) {
    const { params } = state;
    const redirectUri = params.get('redirect_uri');
    const awsState = params.get('state');
    return `${redirectUri}#state=${awsState}&access_token=${token}&token_type=Bearer`;
  }
}

export default AlexaResponder;
