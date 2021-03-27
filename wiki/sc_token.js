var tapd_dsc = {
    cookie_key: "dsc-token",
    http_header_key: "DSC-TOKEN",
    form_key: "dsc_token",
    dsc_token: "",
    gen_token_and_set_to_cookie: function() {
        if (this.dsc_token)
            return this.dsc_token;
        var e = this.getcookie(this.cookie_key);
        return e || (e = this.generate_dsc_token(),
                this.cookie(this.cookie_key, e, {
                    path: "/"
                }),
                this.dsc_token = e),
            e
    },
    add_dsc_to_form: function(e) {
        var t = this.gen_token_and_set_to_cookie(),
            o = document.createElement("input");
        o.setAttribute("type", "hidden"),
            o.setAttribute("name", this.form_key),
            o.setAttribute("value", t),
            document.getElementById(e).appendChild(o)
    },
    generate_dsc_token: function(e) {
        e = e || 16;
        for (var t = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < e; n++)
            t += o.charAt(Math.floor(Math.random() * o.length));
        return t
    },
    cookie: function(e, t, o) {
        if (void 0 === t) {
            var n = null;
            if (document.cookie && "" != document.cookie)
                for (var d = document.cookie.split(";"), r = 0; r < d.length; r++) {
                    var a = jQuery.trim(d[r]);
                    if (a.substring(0, e.length + 1) == e + "=") {
                        n = decodeURIComponent(a.substring(e.length + 1));
                        break
                    }
                }
            return n
        }
        null === t && (t = "");
        var c = (o = o || {}).path ? "; path=" + o.path : "",
            i = o.domain ? "; domain=" + o.domain : "",
            _ = o.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), c, i, _].join("")
    },
    getcookie: function(e) {
        var t = (t = document.cookie.match(new RegExp("".concat(encodeURIComponent(e), "=(\\w+);{0,1}")))) ? t[1] : "";
        return decodeURIComponent(t)
    }
};
tapd_dsc.gen_token_and_set_to_cookie()
"undefined" != typeof jQuery && jQuery(function() {
        jQuery(document).delegate("form", "submit", function(e) {
                var t = tapd_dsc.gen_token_and_set_to_cookie(),
                    o = jQuery("<input>").attr("type", "hidden").attr("name", tapd_dsc.form_key).val(t);
                return jQuery(e.target).append(jQuery(o)), !0
            }),
            jQuery.ajaxPrefilter(function(e, t, o) {
                var n;
                "post" === e.type.toLowerCase() && (n = tapd_dsc.gen_token_and_set_to_cookie(),
                    o.setRequestHeader(tapd_dsc.http_header_key, n))
            })
    }),
    "undefined" != typeof Zepto && Zepto(function() {
        Zepto(document).delegate("form", "submit", function(e) {
                var t = tapd_dsc.gen_token_and_set_to_cookie(),
                    o = Zepto("<input>").attr("type", "hidden").attr("name", tapd_dsc.form_key).val(t);
                return Zepto(e.target).append(Zepto(o)), !0
            }),
            Zepto(document).on("ajaxBeforeSend", function(e, t, o) {
                var n;
                "post" === o.type.toLowerCase() && (n = tapd_dsc.gen_token_and_set_to_cookie(),
                    t.setRequestHeader(tapd_dsc.http_header_key, n))
            })
    });