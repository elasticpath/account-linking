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

const matcher = /^https:\/\/facebook.com\/messenger_platform\/account_linking/;

class FacebookChatbotResponder {
  static canRespond(state) {
    const { params } = state;
    return params && params.has('redirect_uri') && matcher.test(params.get('redirect_uri'));
  }

  static constructResponseUri(state, token) {
    const { params } = state;
    const redirectUri = params.get('redirect_uri');
    return `${redirectUri}&authorization_code=${token}`;
  }
}

export default FacebookChatbotResponder;
