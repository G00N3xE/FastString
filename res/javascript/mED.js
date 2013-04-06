/*!
##############################################################
#. . . . . . . . . . LUCASGUIMARAES.COM. . . . . . . . . . . #
#. . . . . . . . . . (C) COPYRIGHT 2013. . . . . . . . . . . #
##############################################################
*
* @copyright 2012-2013 LucasGuimaraes.com
* @link <contato@lucasguimaraes.com>
* @link http://www.lucasguimaraes.com
* @generator LGPowerWeb/2.0.0 LGGM/6.0.2 (4.0.0)
*
* The above copyright notice shall be included in all
* copies or substantial portions of the Software.
*
*/

/**
 * The mED functions were created with the only intention to
 * quickly obfuscate an address for use in an form.
 * Its old and should not be used to store secure data.
 */
function femED(str) {
    /*
     Not compiled code
     var str=$.base64.encode(str);
     var str=rot13(str);
     var str=encodeURIComponent(str);
     var str=strrev(str);
     var str=$.base64.encode(str);
     return str;
     */
    return $.base64.encode(strrev(encodeURIComponent(rot13($.base64.encode(str)))));
}

function fdmED(str) {
    /*
     Not compiled code
     var str=$.base64.decode(str);
     var str=strrev(str);
     var str=decodeURIComponent(str);
     var str=rot13(str);
     var str=$.base64.decode(str);
     return str;
     */
    return $.base64.decode(rot13(decodeURIComponent(strrev($.base64.decode(str)))));
}

/**
 * END mED
 */