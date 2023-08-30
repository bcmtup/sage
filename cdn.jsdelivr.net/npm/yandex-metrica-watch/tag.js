(function() {
    try {
        (function() {
            function bf(a, c, b, d) {
                var e = this;
                return D(window, "c.i", function() {
                    function f(t) {
                        (t = cf(k, l, "", t)(k, l)) && (U(t.then) ? t.then(g) : g(t));
                        return t
                    }

                    function g(t) {
                        t && (U(t) ? m.push(t) : ra(t) && y(function(B) {
                            var Q = B[0];
                            B = B[1];
                            U(B) && ("u" === Q ? m.push(B) : h(B, Q))
                        }, Ea(t)))
                    }

                    function h(t, B, Q) {
                        e[B] = Ll(k, l, Q || p, B, t)
                    }
                    var k = window;
                    (!k || isNaN(a) && !a) && $d();
                    var l = Ml(a, df, c, b, d),
                        m = [],
                        p = [vh, cf, wh];
                    p.unshift(Nl);
                    var q = A(P, ub),
                        r = N(l);
                    l.id || Ta(mc("Invalid Metrika id: " + l.id, !0));
                    var u = cd.C("counters", {});
                    if (u[r]) return vb(k,
                        r, "Duplicate counter " + r + " initialization"), u[r];
                    u[r] = e;
                    cd.D("counters", u);
                    cd.Ma("counter", e);
                    y(function(t) {
                        t(k, l)
                    }, ae);
                    y(f, Ec);
                    f(Ol);
                    h(Pl(k, l, m), "destruct", [vh, wh]);
                    Lb(k, F([k, q, f, 1, "a.i"], xh));
                    y(f, X)
                })()
            }

            function Ql(a, c) {
                var b;
                if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
                    var d = c.source,
                        e = (b = {}, b._ym_uid = a, b);
                    d.postMessage(e, "https://oauth.yandex.ru")
                }
            }

            function Rl(a) {
                var c = Z(Boolean, A(function(b) {
                    var d = b[1];
                    return (b = Sl(a[b[0]])) ? "" + d + "\n" +
                        b : null
                }, Ea(Tl)));
                return H("\n", c)
            }

            function Ul(a) {
                return "che\n" + a
            }

            function Sl(a) {
                return na(a) ? a : ca(a) ? H(",", A(function(c) {
                    return '"' + c.brand + '";v="' + c.version + '"'
                }, a)) : ia(a) ? "" : a ? "?1" : "?0"
            }

            function ef(a) {
                var c = Vl(a);
                return {
                    M: function(b, d) {
                        b.ga || (b.ga = {});
                        b.ga.Hh = c(yh);
                        d()
                    },
                    ra: function(b, d) {
                        var e = b.xi;
                        V(e) || c(Wl(e));
                        d()
                    }
                }
            }

            function yh(a) {
                var c = a.De,
                    b = a.Gh;
                y(function(f, g) {
                    1 < b[g] && (a.kd = g)
                }, c);
                var d = a.kd,
                    e = c.slice().splice(d - 1, 1);
                e.unshift(c[d]);
                return e
            }

            function Xl(a, c) {
                c.cookie.D("hostIndex", H(",", A(function(b,
                    d) {
                    return H("-", [d, b])
                }, a)), 1440)
            }

            function zh(a, c) {
                var b = a.C("hostIndex");
                return b ? A(function(d) {
                    return Fa(d.split("-")[1])
                }, b.split(",")) : A(w(0, P), c)
            }

            function Yl(a, c) {
                var b = Zl(a),
                    d = [$l(a) || am(a)];
                bm(a) && d.push(b);
                d.unshift("mc.webvisor.org");
                var e = da(a);
                b = Na(a);
                var f = b.C("synced", {});
                d = Z(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(jb);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.D("synced", f);
                return A(function(g) {
                    return {
                        Ei: c[g],
                        Vh: g
                    }
                }, d)
            }

            function am(a) {
                a = cm(a);
                return dm[a] || a
            }

            function Zl(a) {
                a = Ah(a);
                return em[a] ||
                    "ru"
            }

            function fm(a, c) {
                var b = "" + c,
                    d = {
                        id: 1,
                        Z: "0"
                    },
                    e = gm(b);
                e ? d.id = e : -1 === b.indexOf(":") ? (b = Fa(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Fa(b[0]), d.Z = be(e) ? "1" : "0");
                return [Ha(a, d), d]
            }

            function hm(a, c) {
                dd[a] || (dd[a] = []);
                dd[a].push(c)
            }

            function im(a, c, b, d) {
                var e = b.K;
                if (c.Xi || be(c.Z) || !e) d();
                else {
                    var f = ce(a),
                        g = ed(a, ""),
                        h = function() {
                            var u = Bh(f);
                            u = "" + u + jm(u, g);
                            de(b, "gdpr", u);
                            d()
                        };
                    if (3 === c.id) h();
                    else {
                        var k = I(a);
                        if (e = k.C("f1")) e(h);
                        else {
                            var l = (e = Bh(f)) ? A(w(ee, n), e.split(",")) : [];
                            if (Ch(l)) h();
                            else {
                                e = fe(a);
                                var m =
                                    S(a);
                                var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                    url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                    version: 2,
                                    pf: km,
                                    xf: "_inversed_buttons"
                                } : void 0;
                                var q = (e = e || !!p) && (Fb(m.href, "yagdprcheck=1") || g.C("yaGdprCheck"));
                                m = g.C("gdpr");
                                var r = J.resolve();
                                g.C("yandex_login") ? (l.push("13"), g.D("gdpr", Fc, 525600)) : e ? L(m, $b) ? m === ff ? l.push("12") : l.push("3") : gf(a) || lm(a) ? l.push("17") : r = mm(a).then(function(u) {
                                    u && l.push("28")
                                }, C) : l.push("14");
                                r.then(function() {
                                    var u = w(f, nm);
                                    Ch(l) ? (y(u, l), h()) :
                                        (ge.push(h), k.D("f1", function(t, B) {
                                            var Q = 0;
                                            if (B) {
                                                var O = kb(a, B) || "";
                                                Q += O.length
                                            }
                                            ge.push(t);
                                            1E6 >= Q && ge.push(t)
                                        }), (0, hf[0])(a).then(Y("params.eu")).then(function(t) {
                                            if (t || q) {
                                                g.D("gdpr_popup", ff);
                                                om(a, c);
                                                if (db(a)) return pm(a, u, c);
                                                var B = Dh(a, f);
                                                if (B) return t = qm(a, u, B, c, p), t.then(F([a, c], rm)), t
                                            }
                                            t || u("8");
                                            return J.resolve({
                                                value: Fc,
                                                Jd: !0
                                            })
                                        }).then(function(t) {
                                            g.Hb("gdpr_popup");
                                            if (t) {
                                                var B = t.value;
                                                t = t.Jd;
                                                L(B, $b) && g.D("gdpr", B, t ? void 0 : 525600)
                                            }
                                            B = nc(ge, ha);
                                            oc(a, B, 20)(Ra(D(a, "gdr"), C));
                                            k.D("f1", ha)
                                        })["catch"](D(a,
                                            "gdp.a")))
                                })
                            }
                        }
                    }
                }
            }

            function rm(a, c) {
                if (fe(a)) {
                    var b = ce(a),
                        d = Ha(a, c);
                    d = d && d.params;
                    b = A(w(sm, n), jf(b));
                    d && b.length && d("gdpr", Oa(b))
                }
            }

            function pm(a, c, b) {
                var d = he(a, b);
                return new J(function(e) {
                    var f;
                    if (d) {
                        var g = d.$,
                            h = v(w("4", c), w(null, e)),
                            k = W(a, h, 2E3, "gdp.f.t");
                        d.Pf((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.F(za(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], kf), function(m) {
                                e({
                                    value: Eh(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(F([a, k], pa))
                    } else e({
                        value: ff,
                        Jd: !0
                    })
                })
            }

            function om(a, c) {
                var b = he(a, c);
                b && b.$.F(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = fe(a), d
                });
                return b
            }

            function qm(a, c, b, d, e) {
                var f = void 0 === e ? tm : e;
                e = f.url;
                var g = f.xf,
                    h = f.Th;
                f = um(a, f.pf, d.Yi);
                var k = he(a, d);
                if (!k) return J.resolve({
                    value: Fc,
                    Jd: !0
                });
                var l = pc(a, {
                    src: "" + e + (h ? "" : f) + g + ".js"
                });
                return new J(function(m, p) {
                    l ? (c("7"), l.onerror = function() {
                        var q;
                        c("9");
                        k.Of((q = {}, q.type = "GDPR-ok-view-default", q));
                        m(null)
                    }, l.onload = function() {
                        c("10");
                        b.F(za(["GDPR-ok-view-default", "GDPR-ok-view-detailed"],
                            kf), function(q) {
                            var r;
                            q = q.type;
                            k.Of((r = {}, r.type = q, r));
                            m({
                                value: Eh(q)
                            })
                        })
                    }) : (c("9"), p(Sa("gdp.e")))
                })
            }

            function um(a, c, b) {
                a = b || Ah(a);
                return L(a, c) ? a : "en"
            }

            function Eh(a) {
                if (L(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Fc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return L(a, $b) ? a : Fc
            }

            function Fh(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    G(e, d)(kb(a, c))
                } catch (f) {} else Gh = W(a, F([a, c, 2 * b], Fh), b, "ai.d");
                return function() {
                    return pa(a, Gh)
                }
            }

            function vm(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (!c) return "";
                a = G(c, a.speechSynthesis);
                return qc(function(b) {
                    return A(w(b, n), wm)
                }, a())
            }

            function xm(a, c, b) {
                return H("x", A(v(P, sa("concat", "" + a), w(b, n)), c))
            }

            function zm(a, c) {
                var b = c.Bg;
                if (!Am(a, b)) return "";
                var d = [];
                a: {
                    var e = Bm(a, b);
                    try {
                        var f = F(e, v)()();
                        break a
                    } catch (B) {
                        if ("ccf" === B.message) {
                            f = null;
                            break a
                        }
                        Ta(B)
                    }
                    f = void 0
                }
                if (Ua(f)) var g = "";
                else try {
                    g = f.toDataURL()
                } catch (B) {
                    g = ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = La(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (B) {
                    k = []
                }
                k = H(";", k);
                f = lf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = lf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2)
                }
                r = {
                    jj: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": q ? r : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": lf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                mf(d, r, ": ");
                a: {
                    try {
                        var u = b.getExtension("WEBGL_debug_renderer_info");
                        if (u) {
                            var t = {
                                "webgl unmasked vendor": b.getParameter(u.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(u.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (B) {}
                    t = {}
                }
                mf(d, t);
                if (!b.getShaderPrecisionFormat) return H("~", d);
                mf(d, Cm(b));
                return H("~", d)
            }

            function mf(a, c, b) {
                void 0 === b && (b = ":");
                y(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, Ea(c))
            }

            function Dm(a, c, b, d) {
                c = d.C("cc");
                d = F(["cc", ""], d.D);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && Fa(e)) && 1440 < da(a)(jb) - e) return d();
                    b.D("cc", c)
                } else oa(0)(c) || d()
            }

            function Em(a, c, b, d) {
                return qa(c, function(e) {
                    if (!nf(e) && !fd(a))
                        if (e = d.C("zzlc"), V(e) || Ua(e) || "na" === e) {
                            e = "ru";
                            var f = of (a, 68),
                                g = pf(a, 79);
                            if (f || g) e = "md";
                            if (f = ab(a)) {
                                var h =
                                    f("iframe");
                                z(h.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                h.src = "https://mc.yandex." + e + Hh("L21ldHJpa2EvenpsYy5odG1s");
                                if (e = ac(a)) {
                                    e.appendChild(h);
                                    var k = 0,
                                        l = ja(a).F(a, ["message"], D(a, "zz.m", function(m) {
                                            (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (rc(h), m = m.substr(8), d.D("zzlc", m), b.D("zzlc", m), l(), pa(a, k))
                                        }));
                                    k = W(a, v(l, w(h, rc)), 3E3)
                                }
                            }
                        } else b.D("zzlc", e)
                })
            }

            function Fm(a, c, b) {
                var d, e;
                c = wb(w(a, n), Gm);
                c = V(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f =
                        new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    U(a) && (G(a, f, "y.metrika")(), a = n(f, "createOffer"), U(a) && !a.length && (a = G(a, f)(), d = n(a, "then"), U(d) && G(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        U(h) && G(h, f, g, C, C)()
                    })(), z(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (U(h)) {
                            h = G(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = C;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = sc(k[1]), b.D("pp", g));
                            f.onicecandidate = C;
                            h()
                        }
                    }, e))))
                }
            }

            function Hm(a, c, b) {
                var d, e = gd(a, c);
                if (e) {
                    e.$.F(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.C("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = W(a, F([a, c, b], Ih), 200, "pu.m");
                        e.ke(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (pa(a, g), b.D("pu", l))
                        })
                    } else Ih(a, c, b)
                }
            }

            function Ih(a, c, b) {
                var d = n(a, "location.host");
                a = hd(a, c);
                b.D("pu", "" + sc(d) + a)
            }

            function Jh(a, c, b) {
                c = ed(a, void 0, c);
                c = Kh(a, c.C("phc_settings") || "");
                var d = n(c, "clientId"),
                    e = n(c, "orderId"),
                    f = n(c, "service_id"),
                    g = n(c, "phones") || [];
                return d && e && g ? Im(a, b.jc, {
                    ag: Jm
                }).Cf(g).then(function(h) {
                    return Km(b, {
                        Eb: d,
                        Pb: e,
                        Sf: f
                    }, h.ma, g, h.Aa)
                })["catch"](function() {}) : J.resolve()
            }

            function Jm(a, c, b) {
                a = Lm(b.Oc);
                if ("href" === b.ee) {
                    var d = b.vb;
                    c = d.href;
                    b = c.replace(a, b.cb);
                    if (c !== b) return d.href = b, !0
                } else if ((a = null === (d = b.vb.textContent) || void 0 === d ? void 0 : d.replace(a, b.cb)) && a !== b.vb.textContent) return b.vb.textContent = a, !0;
                return !1
            }

            function Km(a, c, b, d, e) {
                var f;
                c.Eb && c.Pb && (c.Eb === a.Eb && c.Pb === a.Pb || z(a,
                    c, {
                        ma: {},
                        jb: !0
                    }), 0 < e && Va(a.Aa, [e]), y(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.ma[l] && a.ma[l][g] ? a.ma[l][g] : 0);
                    z(a.ma, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), y(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.ma[l] ? a.ma[l][g] : 0);
                    z(a.ma, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.jf && (a.jb || b.length) && ((c = Ha(a.l, a.jc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Eb, f.orderId = a.Pb, f.service_id = a.Sf, f.phones = a.ma, f.performance = a.Aa, f)), a.jb = !1))
            }

            function Mm(a) {
                a = ab(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = sa("canPlayType",
                            a),
                        b = qc(function(d) {
                            return A(v(P, sa("concat", d + "; codecs=")), Nm)
                        }, Lh);
                    return A(c, [].concat(Lh, b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function Om(a) {
                var c = n(a, "matchMedia");
                if (c && Aa("matchMedia", c)) {
                    var b = sa("matchMedia", a);
                    return M(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, Pm)
                }
            }

            function Cm(a) {
                return M(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float",
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)
                    ],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
                        a.LOW_FLOAT)],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision",
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)
                    ]
                ])
            }

            function Bm(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter && Aa("getParameter", c.getParameter) || qf();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(Qm);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.Rh = 3;
                    b.$h = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || qf();
                    return {
                        ce: d,
                        Wi: e,
                        Vi: b
                    }
                }, function(b) {
                    var d = b.ce,
                        e = b.Wi;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || qf();
                    return z(b, {
                        fh: d
                    })
                }, function(b) {
                    var d = b.ce,
                        e = b.fh;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.ce;
                    b = b.Vi;
                    d.Ui = c.getAttribLocation(d, "attrVertex");
                    d.bi = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.Fj);
                    c.vertexAttribPointer(d.Ui,
                        b.Rh, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.bi, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.$h);
                    return c.canvas
                }]
            }

            function Am(a, c) {
                if (!U(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Aa("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function lf(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function Rm(a, c) {
                if (n(c, "settings.ins")) {
                    var b = I(a);
                    if (!b.C("scip")) {
                        var d =
                            rf(a),
                            e = da(a)(jb),
                            f = sf(d.C("sci"));
                        if (!(f && 1440 >= e - f)) {
                            f = ta(a, "ci");
                            var g = ["sync.cook.int"],
                                h = function(l) {
                                    l = b.C("scip", "") + l;
                                    b.D("scip", l)
                                },
                                k = w("a", h);
                            b.D("scip", "0");
                            return f({
                                aa: {
                                    ha: g,
                                    Na: 3E3,
                                    Bb: !0
                                }
                            }, ["https://an.yandex.ru/sync_cookie"]).then(function(l) {
                                l = n(l.Qc, "CookieMatchUrls");
                                if (ca(l) && Pa(l)) {
                                    h("1");
                                    var m = ta(a, "c");
                                    l = A(function(p, q) {
                                        return m({
                                            aa: {
                                                ha: g,
                                                Na: 3E3
                                            }
                                        }, ["https://" + p])["catch"](v(w("b", h), w("" + q, h)))
                                    }, Z(na, l));
                                    return J.all(l)
                                }
                                k()
                            }, k).then(function() {
                                var l = b.C("scip");
                                !l || Fb(l, "a") ||
                                    Fb(l, "b") || (d.D("sci", e), h("2"))
                            }, C)
                        }
                    }
                }
            }

            function Sm() {
                return M(function(a, c) {
                    var b = sc(c + "/tag.js");
                    Mh[b] || (a[b] = 1);
                    return a
                }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
            }

            function Nh(a) {
                return {
                    M: function(c, b) {
                        if (!c.K) return b();
                        var d = I(a).C("fid");
                        !Oh && d && (de(c, "fid", d), Oh = !0);
                        return b()
                    }
                }
            }

            function Tm(a, c) {
                var b = a.document;
                if (L(b.readyState, ["interactive", "complete"])) Lb(a, c);
                else {
                    var d = ja(a),
                        e = d.F,
                        f = d.Xb,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function tf(a) {
                return {
                    M: function(c, b) {
                        var d = c.K;
                        if (d) {
                            var e = I(a).C("adBlockEnabled");
                            e && d.D("adb", e)
                        }
                        b()
                    }
                }
            }

            function Um(a) {
                var c = D(a, "i.clch", Vm);
                ja(a).F(a.document, ["click"], G(c, null, a), {
                    passive: !1
                });
                return function(b) {
                    var d = ua.Qa,
                        e = a.Ya[ua.fc],
                        f = !!e._informer;
                    e._informer = z({
                        domain: "metrika-informer.com"
                    }, b);
                    f || pc(a, {
                        src: d + "//metrika-informer.com/metrika/informer.js"
                    })
                }
            }

            function Wm(a, c) {
                var b = Na(a);
                if ("" === b.C("cc")) {
                    var d = w("cc", b.D);
                    d(0);
                    var e = da(a),
                        f = I(a);
                    f = v(Y(Xm({
                        Qc: 1
                    }) + ".c"), id(function(g) {
                        d(g + "&" + e(jb))
                    }), w("cc", f.D));
                    ta(a, "6", c)({
                        aa: {
                            Bb: !0,
                            Ce: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(f)["catch"](v(id(function() {
                        var g = e(jb);
                        b.D("cc", "&" + g)
                    }), D(a, "cc")))
                }
            }

            function ie(a, c) {
                if (!c) return !1;
                var b = S(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function Ym(a, c) {
                return qa(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Og: Zm(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function $m(a, c, b, d, e) {
                b = uf(a.document.body, b);
                d = uf(a.document.body,
                    d);
                L(e.target, [b, d]) && vf(a, c)
            }

            function Ph(a, c, b, d) {
                (b = an(a, d, b)) && vf(a, c, b)
            }

            function Qh(a, c) {
                var b = Rh(a, c);
                return bn(a, b)
            }

            function Rh(a, c) {
                var b = uf(a.document.body, c);
                return b ? cn(a, b) : ""
            }

            function vf(a, c, b) {
                if (c = Ha(a, c)) a = Gc(["dr", b || "" + Wa(a, 10, 99)]), c.params(Gc(["__ym", a]))
            }

            function uf(a, c) {
                var b = null;
                try {
                    b = c ? tc(c, a) : b
                } catch (d) {}
                return b
            }

            function Sh(a) {
                a = Ba(Hh(a));
                return A(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return Th("0", 8, c)
                }, a)
            }

            function cn(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                wf(a,
                    c,
                    function(e) {
                        if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                        else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                        (f = f && f.trim()) && b.push(f)
                    });
                return 0 === b.length ? "" : b.join(" ")
            }

            function dn(a, c, b) {
                a = Da(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    pc: b
                })
            }

            function en(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(fn, d + "." + b.pc)) && (c && L(b, gn) || a("ym-" + b + "-" + d))
                }
            }

            function hn(a, c, b) {
                var d, e = Uh(a, c),
                    f = S(a);
                f = je(f.protocol + "//" + f.hostname + f.pathname);
                c = hd(a, c);
                var g = "";
                do g += Wa(a); while (g.length <
                    c.length);
                g = g.slice(0, c.length);
                a = "";
                for (var h = 0; h < c.length; h += 1) a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
                c = [g, a];
                a = c[0];
                c = c[1];
                return (d = {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f, d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1", d)[b]
            }

            function jn(a, c, b) {
                var d = n(b, "data");
                if (na(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
                }
            }

            function kn(a) {
                if (a.type && a.event) switch (a.type) {
                    case "page":
                        var c =
                            a.data,
                            b = c.recordStamp,
                            d = c.tabId,
                            e = c.content;
                        delete c.recordStamp;
                        delete c.tabId;
                        delete c.content;
                        c = {
                            type: "page",
                            data: {
                                frameId: a.frameId || 0,
                                content: e,
                                recordStamp: b,
                                tabId: d,
                                meta: c
                            }
                        };
                        a.stamp && (c.stamp = a.stamp);
                        return c;
                    case "event":
                        a: {
                            b = {
                                type: "event",
                                stamp: a.stamp,
                                data: {
                                    frameId: a.frameId,
                                    type: a.event,
                                    meta: {}
                                }
                            };d = z({}, a.data);
                            switch (a.event) {
                                case "zoom":
                                    b.data.meta = {
                                        zoomFrom: {
                                            x: 0,
                                            y: 0,
                                            level: 0
                                        },
                                        zoomTo: d,
                                        duration: 1
                                    };
                                    break;
                                case "keystroke":
                                    b.data.meta = d.keystrokes;
                                    break;
                                case "deviceRotation":
                                case "resize":
                                    b.data.meta =
                                        d;
                                    break;
                                case "windowfocus":
                                case "windowblur":
                                case "focus":
                                    b.data.target = d.target;
                                    b.data.meta = null;
                                    break;
                                case "touchmove":
                                case "touchstart":
                                case "touchend":
                                case "touchcancel":
                                case "touchforcechange":
                                case "scroll":
                                case "change":
                                case "click":
                                case "mousemove":
                                case "mousedown":
                                case "mouseup":
                                case "selection":
                                case "stylechange":
                                    b.data.target = d.target;
                                    delete d.target;
                                    b.data.meta = d;
                                    break;
                                case "srcset":
                                    a = {
                                        type: "mutation",
                                        stamp: a.stamp,
                                        data: {
                                            frameId: a.frameId,
                                            meta: {
                                                changes: [{
                                                    c: [{
                                                        id: d.target,
                                                        at: (c = {}, c.src = {
                                                            o: "",
                                                            n: d.value,
                                                            r: !1
                                                        }, c),
                                                        i: 0
                                                    }]
                                                }],
                                                index: 0
                                            }
                                        }
                                    };
                                    break a
                            }
                            a = b
                        }
                        return a;
                    case "mutation":
                        return ln(a)
                }
                return a
            }

            function ln(a) {
                var c = z({}, a.data),
                    b = [];
                switch (a.event) {
                    case "tc":
                        b = [{
                            d: [{
                                id: c.target,
                                ct: {
                                    o: "",
                                    n: c.value
                                },
                                i: c.index
                            }]
                        }];
                        break;
                    case "ac":
                        b = [{
                            c: [{
                                id: c.target,
                                at: M(function(d, e) {
                                    var f = e[1];
                                    d[e[0]] = {
                                        o: "",
                                        n: f,
                                        r: ia(f)
                                    };
                                    return d
                                }, {}, Ea(c.attributes)),
                                i: c.index
                            }]
                        }];
                        break;
                    case "re":
                        b = [{
                            a: A(function(d) {
                                return {
                                    id: d,
                                    i: c.index
                                }
                            }, c.nodes)
                        }];
                        break;
                    case "ad":
                        b = [{
                            b: A(function(d) {
                                return {
                                    id: d.id,
                                    nm: d.name,
                                    ns: d.namespace,
                                    pa: d.parent,
                                    pr: d.prev,
                                    nx: d.next,
                                    at: d.attributes,
                                    i: c.index,
                                    ct: d.content,
                                    h: d.hidden
                                }
                            }, c.nodes)
                        }]
                }
                return {
                    type: "mutation",
                    stamp: a.stamp,
                    data: {
                        frameId: a.frameId,
                        meta: {
                            changes: b,
                            index: c.index
                        }
                    }
                }
            }

            function mn(a) {
                if (Vh.isEnabled(a)) return new Vh(a);
                if (Hc.isEnabled(a)) return new Hc(a)
            }

            function nn(a, c) {
                var b = Na(a),
                    d = "wv2rf:" + N(c),
                    e = c.dc,
                    f = xf(a),
                    g = b.C(d),
                    h = c.Ni;
                return V(f) || Ua(g) ? va(function(k, l) {
                    qa(c, function(m) {
                        var p = n(m, "settings.webvisor.forms");
                        p = !n(m, "settings.x3") && p;
                        f = xf(a) || n(m, "settings.eu");
                        b.D(d,
                            Gb(p));
                        l({
                            dc: e,
                            Id: !!f,
                            Af: p,
                            cg: h
                        })
                    })
                }) : yf({
                    dc: e,
                    Id: f,
                    Af: !!Fa(g),
                    cg: h
                })
            }

            function on() {
                var a = M(function(c, b) {
                    c[b[0]] = {
                        dd: 0,
                        zg: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove", .5132],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange", .0233],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    vg: function(c) {
                        if (c.length) return {
                            type: "activity",
                            data: M(function(b, d) {
                                var e = a[d];
                                return Math.round(b + e.dd * e.zg)
                            }, 0, ea(a))
                        }
                    },
                    ei: function(c) {
                        c && (c = a[c.data.type]) && (c.dd += 1)
                    }
                }
            }

            function pn(a) {
                return {
                    hh: function() {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    jh: function() {
                        if (a.document.doctype) {
                            var c = z({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " + H("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        }
                        return null
                    }
                }
            }

            function qn(a, c, b) {
                var d = jd(a),
                    e = ja(a),
                    f = db(a),
                    g = c.wd(),
                    h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"),
                    k = w(d, P);
                if (h) {
                    if (!g) return W(a, G(d.O, d, "i", {
                        wa: !1
                    }), 10), {
                        vd: k,
                        Mf: C,
                        stop: C
                    };
                    Ta(Sa())
                }
                d.F(["sr"], function(r) {
                    var u, t = Wh(a, r.source);
                    t && zf(a, r.source, (u = {}, u.type = "\u043d", u.frameId = c.ta().Y(t), u))
                });
                d.F(["sd"], function(r) {
                    var u = r.data;
                    r = r.source;
                    (a === r || Wh(a, r)) && d.O("sdr", {
                        data: u.data,
                        frameId: u.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function() {
                            var r;
                            zf(a, a.parent, (r = {}, r.type = "sr", r));
                            m = W(a, p, 100, "if.i")
                        };
                    p();
                    var q = function(r) {
                        d.ja(["\u043d"], q);
                        pa(a, m);
                        var u = Ic(a, r.origin).host;
                        l || r.source !== a.parent || !r.data.frameId || "about:blank" !== S(a).host && !L(u, b) || (l = !0, d.O("i", {
                            frameId: r.data.frameId,
                            wa: !0
                        }))
                    };
                    d.F(["\u043d"], q);
                    W(a, function() {
                        d.ja(["\u043d"], q);
                        pa(a, m);
                        l || (l = !0, d.O("i", {
                            wa: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.F(a, ["message"], function(r) {
                    var u = Hb(a, r.data);
                    u && u.type && L(u.type, rn) && d.O(u.type, {
                        data: u,
                        source: r.source,
                        origin: r.origin
                    })
                });
                return {
                    vd: k,
                    Mf: function(r) {
                        var u;
                        return zf(a, a.parent, (u = {}, u.frameId = c.wd(), u.data = r, u.type = "sd", u))
                    },
                    stop: e
                }
            }

            function Wh(a, c) {
                try {
                    return wb(v(Y("contentWindow"), oa(c)), Ba(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function zf(a, c, b) {
                a = kb(a, b);
                c.postMessage(a, "*")
            }

            function Xh() {
                return bc() + bc() + "-" + bc() + "-" + bc() + "-" + bc() + "-" + bc() + bc() + bc()
            }

            function bc() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function sn(a, c) {
                if (na(c)) return c;
                var b = a.textContent;
                if (na(b)) return b;
                b = a.data;
                if (na(b)) return b;
                b = a.nodeValue;
                return na(b) ? b : ""
            }

            function tn(a, c, b, d, e) {
                void 0 === d &&
                    (d = {});
                void 0 === e && (e = Ia(c));
                var f = z(M(function(h, k) {
                    h[k.name] = k.value;
                    return h
                }, {}, Ba(c.attributes)), d);
                z(f, un(c, e, f));
                var g = (d = M(function(h, k) {
                    var l = k[0],
                        m = ke(a, c, l, k[1], b, e),
                        p = m.value;
                    ia(p) ? delete f[l] : f[l] = p;
                    return h || m.rb
                }, !1, Ea(f))) && Jc(c);
                g && (f.width = g.width, f.height = g.height);
                return {
                    rb: d,
                    wg: f
                }
            }

            function un(a, c, b) {
                var d = {};
                Af(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function ke(a, c, b, d, e, f) {
                void 0 === f && (f = Ia(c));
                var g = {
                    rb: !1,
                    value: d
                };
                if (Af(c)) "value" === b ? !ia(d) && "" !==
                    d && (b = e.Id, f = e.Af, e = kd(a, c), f ? (b = Kc(a, c, b), a = b.sb, c = b.kb, b = b.Va, g.rb = !c && (e || a)) : (g.rb = e, b = !(c && cc("ym-record-keys", c))), b || e) && (g.value = H("", A(w("\u2022", P), ("" + d).split("")))) : "checked" === b && L((c.getAttribute("type") || "").toLowerCase(), vn) ? g.value = c.checked ? "checked" : null : wn.test(b) && Bf(a, c) && (g.value = null);
                else if ("IMG" === f && "src" === b)(e = kd(a, c)) ? (g.rb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ?
                    c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (L(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === le(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && L(b, ["src", "type"])) g.value = null;
                return g
            }

            function Cf(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    J: function(e, f) {
                        return D(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function xn(a, c, b, d, e) {
                function f() {
                    k && k.stop()
                }
                if (!c.Ab) return J.resolve(C);
                var g = ta(a, "4", c),
                    h = {
                        K: Ja()
                    };
                b = new yn(a, b, function(l, m, p) {
                    if (!g) return J.resolve();
                    var q = "wv-data=" + Yh(l, !0),
                        r = D(a, "m.n.m.s");
                    m = {};
                    m["wv-part"] = "" + p;
                    p = l.length;
                    for (var u = 0, t = 255, B = 255, Q, O, ka; p;) {
                        Q = 21 < p ? 21 : p;
                        p -= Q;
                        do O = "string" === typeof l ? l.charCodeAt(u) : l[u], u += 1, 255 < O && (ka = O >> 8, O &= 255, O ^= ka), t += O, B += t; while (--Q);
                        t = (t & 255) + (t >> 8);
                        B = (B & 255) + (B >> 8)
                    }
                    l = (t & 255) + (t >> 8) << 8 | (B & 255) + (B >> 8);
                    return g(z({}, h, {
                        aa: {
                            ca: q
                        },
                        H: (m["wv-check"] = "" + (65535 === l ? 0 : l), m["wv-type"] = "0", m)
                    }), c)["catch"](r)
                });
                var k = zn(a, b, d, e);
                return qa(c, function(l) {
                    l && I(a).D("isEU", n(l, "settings.eu"));
                    I(a).C("oo") || k && Zh(a,
                        l) && k.start();
                    return f
                })
            }

            function zn(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = ja(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = G(c.flush, c),
                    m = la(function(r, u) {
                        D(a, "hfv." + r, function() {
                            try {
                                var t = u.type
                            } catch (B) {
                                return
                            }
                            t = L(t, d);
                            c.push(u, {
                                type: r
                            });
                            t && l()
                        })()
                    }),
                    p = D(a, "sfv", function() {
                        var r = b(a),
                            u = An(a);
                        y(function(t) {
                            f.push(g.F(t.target, [t.event], m(t.type)))
                        }, r);
                        y(function(t) {
                            f.push(g.F(t.target, [t.event], D(a, "hff." + t.type + "." + t.event, function(B) {
                                y(va({
                                    l: a,
                                    qa: B,
                                    flush: l
                                }), t.N)
                            })))
                        }, u);
                        k = $h(a, "form", e);
                        e.attachEvent && (r = $h(a,
                            "form *", e), y(function(t) {
                            f.push(g.F(t, ["submit"], m("form")))
                        }, k), y(function(t) {
                            Df(t) && f.push(g.F(t, ["change"], m("formInput")))
                        }, r));
                        y(function(t) {
                            var B = t.submit;
                            if (U(B) || "object" === typeof B && Bn.test("" + B)) t[h] = B, t.submit = D(a, "fv", function() {
                                var Q = {
                                    target: t,
                                    type: "submit"
                                };
                                m("document")(Q);
                                return t[h]()
                            })
                        }, k)
                    }),
                    q = D(a, "ufv", function() {
                        y(ha, f);
                        y(function(r) {
                            r && (r.submit = r[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: q
                }
            }

            function Cn(a, c) {
                var b = Z(function(e) {
                        return 0 < e.N.length
                    }, c),
                    d = ai({
                        target: a.document,
                        type: "document"
                    });
                return A(v(P, d, Dn(a)), b)
            }

            function bi(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Xa] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        me(h) && !h[Xa] && Va(d, uc(b, h))
                    }
                } else Va(d, uc(b, c));
                return d
            }

            function Ef(a) {
                if (ld) {
                    ld = !1;
                    var c = xb(a.l),
                        b = [];
                    eb(a.l, b, 15) ? a = [] : (T(b, c), a = b);
                    return a
                }
            }

            function ci(a) {
                if (!ld) {
                    ld = !0;
                    a = xb(a.l);
                    var c = [];
                    Mb(c, 14);
                    T(c, a);
                    return c
                }
            }

            function En(a, c, b) {
                var d = c[Xa];
                if (d) {
                    a: {
                        var e = xb(a),
                            f = c[Xa];
                        if (0 < f) {
                            var g = [];
                            c = Ff(a, c);
                            var h = vc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.wf) {
                                h.wf =
                                    k;
                                if (eb(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                T(g, e);
                                T(g, f);
                                T(g, c[0]);
                                T(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (eb(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                T(g, e);
                                T(g, f);
                                T(g, c[2]);
                                T(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    Va(b, a)
                }
                return d
            }

            function Kc(a, c, b) {
                void 0 === b && (b = !1);
                if (!c) return {
                    Va: !1,
                    kb: !1,
                    sb: !1
                };
                var d = c.getAttribute("type") || c.type;
                if ("button" === d) return {
                    Va: !1,
                    kb: !1,
                    sb: !1
                };
                var e = Z(di, [c.className, c.id, c.name]),
                    f = c && cc("ym-record-keys", c);
                d = d && L(d, ei) || Ma(Ya(Fn), e);
                var g;
                (g = d) || (g = c.placeholder, g = Ma(Ya(Gn), e) || di(g) && Hn.test(g ||
                    ""));
                e = g;
                return {
                    Va: !f && (Gf(a, c) || e && b || e && !d && !b),
                    kb: f,
                    sb: e
                }
            }

            function Gf(a, c) {
                return Bf(a, c) || md(a, c) ? !0 : kd(a, c)
            }

            function di(a) {
                return !!(a && 2 < a.length)
            }

            function Af(a) {
                try {
                    var c = Ia(a);
                    if (L(c, Hf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || L(b.toLocaleLowerCase(), In)
                        }
                        return !0
                    }
                } catch (d) {}
                return !1
            }

            function fi(a, c) {
                return c && cc("(ym-disable-submit|-metrika-noform)", c)
            }

            function Jn(a, c) {
                return H("", A(function(b) {
                    return a.isNaN(b) ? Kn.test(b) ? (b = b.toUpperCase() === b ? Ln : Mn, String.fromCharCode(Wa(a, b[0], b[1]))) :
                        b : "" + Wa(a, 0, 9)
                }, c.split("")))
            }

            function kd(a, c) {
                if (ia(c)) return !1;
                if (If(c)) {
                    var b = c.parentNode;
                    return (ia(b) ? 0 : 11 === b.nodeType) ? !1 : kd(a, c.parentNode)
                }
                b = gi(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
            }

            function Zh(a, c) {
                var b = Nb(a),
                    d = b.C("visorc");
                L(d, ["w", "b"]) || (d = "");
                hi(a) && ii(a, ne, "visorc") && !Nn.test(fb(a) || "") || (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d ||
                    (d = I(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.D("visorc", d, 30);
                return "w" === d
            }

            function On(a, c) {
                var b = ji(a, c);
                return {
                    M: function(d, e) {
                        d.K.Ub("we", Ib(c.Ab));
                        b(d, "6", "3", "rn");
                        e()
                    }
                }
            }

            function Pn(a) {
                if (ki.isEnabled(a)) return new ki(a);
                if (Hc.isEnabled(a)) return new Hc(a)
            }

            function li(a) {
                var c = Jf(a).isEnabled,
                    b = !1;
                try {
                    b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size
                } catch (d) {}
                return Kf(Boolean, [!c, b, a.Uint8Array, n(a, "Uint8Array.prototype.slice")])
            }

            function Lf(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return nc([b], function(f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e
                })
            }

            function oe(a, c, b) {
                a = c(b);
                c = [C, 0, 0];
                var d = [0, c, c, void 0];
                return nc(a, function(e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) wc(d, lb(l)), h = k(h), l & 2 && wc(d, lb(h[1])), wc(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, Mf]);
                            m.push([0, lb(l), wc]);
                            m.unshift([0, 0, Nf]);
                            f.push.apply(f, m);
                            --g
                        } else if (g & 2) {
                            k = e[2];
                            var p = e[3],
                                q = e[4],
                                r = e[5],
                                u = ea(h);
                            for (g = u.length - 1; 0 <= g;) m = u[g], m = [
                                [0, 0, Nf],
                                [q, h[m], r],
                                [k, m, p],
                                [0, 0, Mf],
                                [0, lb(l), wc]
                            ], f.push.apply(f, m), --g
                        } else m = k(h), m.push([0, 0, Mf]), m.push([0, lb(l), wc]), m.unshift([0, 0, Nf]), f.push.apply(f, m);
                    return d
                })
            }

            function Nf(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [C, 0, 0], a[2] = a[1]);
                wc(a, lb(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function Mf(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [C, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function wc(a, c) {
                a[0] +=
                    c[1];
                a[2][3] = c;
                a[2] = c
            }

            function Of(a) {
                return [
                    [385, a.activity, lb],
                    [336, a.publishersHeader, Qn],
                    [272, a.articleInfo, Rn],
                    [208, a.event, Sn],
                    [144, a.mutation, Tn],
                    [80, a.page, Un]
                ]
            }

            function Vn(a) {
                return [
                    [321, a.end, Ob],
                    [273, a.Gg, Wn],
                    [193, a.page, K],
                    [144, a.data, Of],
                    [65, a.stamp, K]
                ]
            }

            function mi(a) {
                return [
                    [84, a.buffer, Vn]
                ]
            }

            function Xn(a) {
                return [
                    [129, a.position, K],
                    [81, a.name, R]
                ]
            }

            function Yn(a) {
                return [
                    [81, a.name, R]
                ]
            }

            function Zn(a) {
                return [
                    [81, a.name, R]
                ]
            }

            function Rn(a) {
                return [
                    [593, a.updateDate, R],
                    [532, a.rubric, Xn],
                    [449,
                        a.chars, K
                    ],
                    [401, a.publicationDate, R],
                    [340, a.topics, Yn],
                    [276, a.authors, Zn],
                    [209, a.pageTitle, R],
                    [145, a.pageUrlCanonical, R],
                    [65, a.id, lb]
                ]
            }

            function $n(a) {
                return [
                    [513, a.chars, K],
                    [489, a.maxScrolled, nd],
                    [385, a.involvedTime, K],
                    [321, a.height, K],
                    [257, a.width, K],
                    [193, a.y, K],
                    [129, a.x, K],
                    [65, a.id, lb]
                ]
            }

            function Qn(a) {
                return [
                    [129, a.involvedTime, K],
                    [84, a.articleMeta, $n]
                ]
            }

            function ao(a) {
                return [
                    [81, a.hash, R]
                ]
            }

            function bo(a) {
                return [
                    [209, a.stack, R],
                    [145, a.Tg, R],
                    [81, a.code, R]
                ]
            }

            function co(a) {
                return [
                    [193, a.orientation,
                        K
                    ],
                    [129, a.height, K],
                    [65, a.width, K]
                ]
            }

            function eo(a) {
                return [
                    [84, a.keystrokes, fo]
                ]
            }

            function fo(a) {
                return [
                    [273, a.modifier, R],
                    [193, a.isMeta, Ob],
                    [145, a.key, R],
                    [65, a.id, K]
                ]
            }

            function go(a) {
                return [
                    [145, a.value, R],
                    [81, a.yj, R]
                ]
            }

            function ho(a) {
                return [
                    [149, a.$b, R],
                    [81, a.method, R]
                ]
            }

            function io(a) {
                return [
                    [257, a.pageHeight, K],
                    [193, a.pageWidth, K],
                    [129, a.height, K],
                    [65, a.width, K]
                ]
            }

            function jo(a) {
                return [
                    [144, a.zoomTo, ni],
                    [80, a.zoomFrom, ni]
                ]
            }

            function ni(a) {
                return [
                    [193, a.y, K],
                    [129, a.x, K],
                    [105, a.level, nd]
                ]
            }

            function ko(a) {
                return [
                    [84,
                        a.touches, lo
                    ]
                ]
            }

            function lo(a) {
                return [
                    [297, a.force, nd],
                    [233, a.y, nd],
                    [169, a.x, nd],
                    [81, a.id, R]
                ]
            }

            function mo(a) {
                return [
                    [193, a.hidden, Ob],
                    [129, a.checked, Ob],
                    [81, a.value, R]
                ]
            }

            function no(a) {
                return [
                    [257, a.endNode, K],
                    [193, a.startNode, K],
                    [129, a.end, K],
                    [65, a.start, K]
                ]
            }

            function oo() {
                return []
            }

            function po(a) {
                return [
                    [193, a.page, Ob],
                    [129, a.y, K],
                    [65, a.x, K]
                ]
            }

            function qo(a) {
                return [
                    [129, a.y, K],
                    [65, a.x, K]
                ]
            }

            function ro(a) {
                return [
                    [84, a.changes, so]
                ]
            }

            function so(a) {
                return [
                    [257, a.index, K],
                    [209, a.op, R],
                    [145, a.style, R],
                    [65,
                        a.target, K
                    ]
                ]
            }

            function Sn(a) {
                return [
                    [1168, a.stylechangeEvent, ro],
                    [1104, a.hashchangeEvent, ao],
                    [1040, a.fatalErrorEvent, bo],
                    [976, a.deviceRotationEvent, co],
                    [912, a.keystrokesEvent, eo],
                    [848, a.resizeEvent, io],
                    [784, a.zoomEvent, jo],
                    [720, a.zj, go],
                    [656, a.vj, ho],
                    [592, a.touchEvent, ko],
                    [528, a.changeEvent, mo],
                    [464, a.selectionEvent, no],
                    [400, a.windowEvent, oo],
                    [336, a.scrollEvent, po],
                    [272, a.mouseEvent, qo],
                    [193, a.frameId, pe],
                    [129, a.target, pe],
                    [65, a.type, lb]
                ]
            }

            function Tn(a) {
                return [
                    [257, a.frameId, pe],
                    [208, a.meta, to],
                    [129,
                        a.stamp, K
                    ],
                    [65, a.target, K]
                ]
            }

            function to(a) {
                return [
                    [148, a.changes, uo],
                    [65, a.index, K]
                ]
            }

            function uo(a) {
                return [
                    [276, a.d, vo],
                    [212, a.c, wo],
                    [148, a.b, xo],
                    [84, a.a, yo]
                ]
            }

            function vo(a) {
                return [
                    [193, a.i, K],
                    [144, a.ct, oi],
                    [65, a.id, K]
                ]
            }

            function wo(a) {
                return [
                    [193, a.i, K],
                    [146, a.at, 81, R, 144, oi],
                    [65, a.id, K]
                ]
            }

            function oi(a) {
                return [
                    [193, a.r, Ob],
                    [145, a.n, R],
                    [81, a.o, R]
                ]
            }

            function xo(a) {
                return [
                    [641, a.h, Ob],
                    [577, a.i, K],
                    [513, a.nx, K],
                    [465, a.ct, R],
                    [402, a.at, 81, R, 145, R],
                    [321, a.pr, K],
                    [273, a.ns, R],
                    [193, a.pa, K],
                    [145, a.nm, R],
                    [65, a.id,
                        K
                    ]
                ]
            }

            function yo(a) {
                return [
                    [321, a.i, K],
                    [257, a.pa, K],
                    [193, a.nx, K],
                    [129, a.pr, K],
                    [65, a.id, K]
                ]
            }

            function Un(a) {
                return [
                    [321, a.recordStamp, zo],
                    [273, a.tabId, R],
                    [193, a.frameId, pe],
                    [148, a.content, Ao],
                    [80, a.meta, Bo]
                ]
            }

            function Ao(a) {
                return [
                    [513, a.hidden, Ob],
                    [449, a.prev, K],
                    [385, a.next, K],
                    [337, a.content, R],
                    [257, a.parent, K],
                    [210, a.attributes, 81, R, 145, R],
                    [145, a.name, R],
                    [65, a.id, K]
                ]
            }

            function Bo(a) {
                return [
                    [724, a.rj, Co],
                    [656, a.location, Do],
                    [592, a.viewport, pi],
                    [528, a.screen, pi],
                    [449, a.hasBase, Ob],
                    [401, a.base, R],
                    [337,
                        a.referrer, R
                    ],
                    [273, a.ua, R],
                    [209, a.address, R],
                    [145, a.title, R],
                    [81, a.doctype, R]
                ]
            }

            function Co(a) {
                return [
                    [133, a.scroll, K],
                    [65, a.target, K]
                ]
            }

            function Do(a) {
                return [
                    [209, a.path, R],
                    [145, a.protocol, R],
                    [81, a.host, R]
                ]
            }

            function pi(a) {
                return [
                    [129, a.height, K],
                    [65, a.width, K]
                ]
            }

            function R(a) {
                var c = Eo({}, a, [], 0);
                return c ? [Fo, c, a] : [qi, 0, 0]
            }

            function Wn(a) {
                return [Go, a.length, a]
            }

            function Ob(a) {
                return [qi, 1, a ? 1 : 0]
            }

            function zo(a) {
                a = ri(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [si, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 :
                    2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a
                ]
            }

            function nd(a) {
                return [Ho, 4, a]
            }

            function pe(a) {
                return lb((a << 1 ^ a >> 31) >>> 0)
            }

            function K(a) {
                return 0 > a ? [si, 10, ri(a)] : lb(a)
            }

            function lb(a) {
                return [Io, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            }

            function Io(a, c, b, d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function qi(a, c, b, d) {
                b[d] = c
            }

            function Go(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a]
            }

            function ti(a) {
                return function(c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c = b.charCodeAt(h), 128 >
                            c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 | 240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] = c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        }
                    return a ? g : e
                }
            }

            function Ho(a, c, b, d) {
                return Jo(a)(a, c, b, d)
            }

            function Ko(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) od(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) od(2143289344, b, d);
                else if (3.4028234663852886E38 <
                    c) od((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) od((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    od((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function od(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function si(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function ri(a) {
                if (!a) return [0, 0];
                var c = 0 >
                    a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a, b]
            }

            function ji(a, c) {
                return function(b, d, e, f, g) {
                    var h;
                    b.H || (b.H = {});
                    var k = b.H,
                        l = b.Za;
                    l = void 0 === l ? {} : l;
                    var m = S(a).href;
                    k.wmode = "0";
                    k["wv-hit"] = k["wv-hit"] || "" + xc(a);
                    k["page-url"] = k["page-url"] || m;
                    g && (k[g] = "0");
                    f && (k[f] = k[f] || "" + Wa(a));
                    k["wv-type"] || (k["wv-type"] = l.hf ? e : d);
                    d = {
                        ga: {
                            Ba: "webvisor/" + c.id
                        },
                        aa: z(b.aa || {}, {
                            $a: (h = {}, h["Content-Type"] = "text/plain", h),
                            Zc: "POST"
                        }),
                        H: k
                    };
                    z(b,
                        d)
                }
            }

            function Lo(a, c) {
                return qa(c, function(b) {
                    var d = I(a);
                    N(c);
                    if (!d.C("dSync", !1)) return d.D("dSync", !0), ui(a, b, {
                        gb: c,
                        Mc: "s",
                        Nd: "ds",
                        Di: function(e, f, g) {
                            var h = e.Qc;
                            e = e.host;
                            if (n(h, "settings")) return Ta(Sa("ds.e"));
                            f = f(aa) - g;
                            g = e[1];
                            var k, l;
                            h = Ja((k = {}, k.di = h, k.dit = f, k.dip = g, k));
                            k = (l = {}, l["page-url"] = S(a).href, l);
                            return ta(a, "S", vi)({
                                K: h,
                                H: k
                            }, vi)["catch"](D(a, "ds.rs"))
                        }
                    })
                })
            }

            function ui(a, c, b) {
                var d = b.gb,
                    e = da(a),
                    f = Mo(a, c.userData, d),
                    g = No(a);
                return g.length ? Oo(a, e, f, c, b).then(function() {
                    return Po(a, g, f,
                        e, b)
                }, C) : J.resolve()
            }

            function No(a) {
                var c = pd(a);
                a = v(Pf, yc(["iPhone", "iPad"]))(a);
                return c ? Qo : a ? Ro : []
            }

            function Po(a, c, b, d, e) {
                var f = e.Di,
                    g = void 0 === f ? C : f,
                    h = e.Nd,
                    k = d(aa);
                return So(a, c, e)(Ra(function(l) {
                    y(function(m) {
                        m && qe(a, h + ".s", m)
                    }, l);
                    l = d(jb);
                    b.D(h, l)
                }, function(l) {
                    b.D(h, d(jb));
                    g(l, d, k)
                }))
            }

            function Oo(a, c, b, d, e) {
                var f = e.Nd,
                    g = e.gb;
                return new J(function(h, k) {
                    var l = b.C(f, 0);
                    l = parseInt("" + l, 10);
                    return 60 >= c(jb) - l ? k() : To(a) ? h(void 0) : nf(d) ? k() : h(Uo(a, g))
                })
            }

            function So(a, c, b) {
                var d = b.Mc,
                    e = b.data,
                    f = ta(a,
                        d, b.gb);
                a = z({}, wi);
                e && z(a.H, e);
                return Vo(A(function(g) {
                    return Wo(f(z({
                        aa: {
                            Ce: !1,
                            fe: !0
                        }
                    }, wi), A(function(h) {
                        var k = h[1],
                            l = h[2];
                        h = H("", A(function(m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Xo[d]
                    }, g)).then(function(h) {
                        return z({}, h, {
                            host: g[h.eg]
                        })
                    }))
                }, c))
            }

            function Mo(a, c, b) {
                var d = c || {},
                    e = ta(a, "u", b),
                    f = Na(a);
                return {
                    C: function(g, h) {
                        return V(d[g]) ? f.C(g, h) : d[g]
                    },
                    D: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e({
                            H: (k = {}, k.key = g, k.value =
                                l, k)
                        }, [ua.Qa + "//" + dc + "/user_storage_set"], {})["catch"](D(a, "u.d.s.s"))
                    }
                }
            }

            function Yo(a) {
                return {
                    M: function(c, b) {
                        I(a).C("oo") || b()
                    }
                }
            }

            function Zo(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return J.resolve()
                    }
                }
                return function(e) {
                    var f, g = (f = {}, f["browser-info"] = $o, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = kb(a, e)) ? d(ap, {
                        ab: g,
                        ha: [],
                        ca: "site-info=" + je(e)
                    })["catch"](C) : J.resolve()
                }
            }

            function bp(a, c) {
                if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
                    var b = N(c);
                    delete I(a).C("counters", {})[b];
                    Ta(Sa("oo.e"))
                }
            }

            function cp(a) {
                if (qd(a)) return null;
                var c = dp(a),
                    b = c.zf;
                V(b) && (c.zf = null, ep(a).then(function(d) {
                    c.zf = d
                }));
                return b ? 1 : null
            }

            function fp(a, c, b) {
                b = b.H;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = Qf(a);
                if (!a) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = gp);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = hp, d = e)
                }
                if (!b) return null;
                a = ip(a, d, b);
                c = N(c);
                c = jp(c);
                return (c = kp(c, a)) && H(",", c)
            }

            function kp(a, c) {
                var b = a.length ? A(function(d, e) {
                    var f = c[e];
                    return f ===
                        d ? null : f
                }, a) : c;
                a.length = 0;
                y(v(P, sa("push", a)), c);
                return Z(oa(null), b).length === a.length ? null : b
            }

            function ip(a, c, b) {
                return A(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (U(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(xi[d[0]] || xi[g]));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }

            function Yh(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) +
                        a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b &
                            63
                        ], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = e.join("");
                return c ? yi(e, !0) : e
            }

            function Hh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = yi(b)); b.length % 4;) b += "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function yi(a,
                c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return lp[b] || b
                }) : ""
            }

            function mp(a) {
                try {
                    var c = Pa(a) ? a : [];
                    return H(",", [a.name, a.description, v(Ba, Oa, gb(np), rd(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function np(a) {
                return H(",", [a.description, a.suffixes, a.type])
            }

            function op(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function pp(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                ia(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g));
                V(h) || h.Ub(f, "" + k);
                return k
            }

            function qp(a, c) {
                if (sd(a)) {
                    var b = fb(a).match(rp);
                    if (b && b.length) return b[1] ===
                        c
                }
                return !1
            }

            function re(a, c, b) {
                return function(d) {
                    var e, f, g = Ha(c, b);
                    g && sp(a, d, c) && (g = G(g.params, g), (d = Rf({
                        event: a,
                        Ia: "products",
                        ya: ec,
                        xh: "goods"
                    }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function sp(a, c, b) {
                var d = !1,
                    e = "";
                if (!ra(c)) return vb(b, "", "Ecommerce data should be an object"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        ca(f) && f.length ? (d = Kf(function(g) {
                                return ra(g) && (na(g.id) || se(b, g.id) || na(g.name))
                            }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") :
                            e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        se(b, c.id) || na(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                vb(b, "", e);
                return d
            }

            function td(a, c) {
                return {
                    M: function(b, d) {
                        te(b) ? d() : qa(c, function(e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.H = z(b.H || {}, e);
                            d()
                        })
                    }
                }
            }

            function tp(a, c) {
                function b() {
                    q.hidden ? z(k.style, ud(["top", "right", "left", "background"], "initial")) : z(k.style, ud(["top", "right", "left"], "0"), {
                        background: "rgba(0, 0, 0, .3)"
                    });
                    t.parentNode || (r.appendChild(p), r.appendChild(t));
                    q.hidden = !q.hidden;
                    r.hidden = !r.hidden;
                    u.hidden = !u.hidden
                }

                function d(O) {
                    var ka = g();
                    z(ka.style, zc("2px", "18px"), Lc, {
                        left: "15px",
                        top: "7px",
                        background: "#2f3747",
                        borderRadius: "2px"
                    });
                    ka.style.transform = "rotate(" + O + "deg)";
                    return ka
                }

                function e(O, ka, wa, yb, vd) {
                    var ue = g();
                    z(ue.style, zc(ka + "px", wa + "px"), Lc, {
                        left: O + "px",
                        bottom: 0,
                        background: yb,
                        borderTopLeftRadius: vd
                    });
                    return ue
                }
                var f = ab(a);
                if (!f) return C;
                var g = w("div", f),
                    h = w("iframe", f),
                    k = g();
                k.classList.add("__ym_wv_ign");
                z(k.style, zi, {
                    bottom: "0",
                    width: "100%",
                    maxWidth: "initial",
                    zIndex: "999999999"
                });
                var l = k.attachShadow ? k.attachShadow({
                        mode: "open"
                    }) : k,
                    m = g();
                z(m.style, zc("24px"), Lc, Sf, {
                    top: "12px",
                    right: "10px",
                    background: "#3367dc",
                    overflow: "hidden"
                });
                var p = g();
                z(p.style, {
                    border: "2px solid transparent",
                    animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear"
                }, Sf, Lc, zc("48px"), ud(["top", "left"], "calc(50% - 24px)"), ud(["borderTopColor", "borderLeftColor"], "#fc0"));
                f = f("style");
                f.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
                p.appendChild(f);
                var q = g();
                q.id = "__ym_wv_ign__opener";
                z(q.style, zc("46px", "48px"), zi, {
                    right: "0",
                    bottom: "60px",
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: "16px 0 0 16px",
                    boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
                });
                var r = g();
                z(r.style, Lc, ud(["top", "right", "bottom"], "0"), {
                    width: "600px",
                    background: "#fff"
                });
                var u = g();
                u.id = "__ym_wv_ign__closer";
                z(u.style, zc("32px"), Lc, Sf, {
                    top: "12px",
                    right: "612px",
                    cursor: "pointer",
                    background: "#fff"
                });
                f = h();
                f.src = "https://metrika.yandex.ru/widget/iframe-check";
                var t = h();
                z(t.style, zc("100%"), {
                    border: "none"
                });
                t.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
                r.hidden = !0;
                u.hidden = !0;
                u.appendChild(d(45));
                u.appendChild(d(-45));
                r.appendChild(f);
                m.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"));
                m.appendChild(e(8, 9, 16, "#04acff", "3px"));
                m.appendChild(e(17, 7, 24, "#ffdd13"));
                q.appendChild(m);
                l.appendChild(r);
                l.appendChild(u);
                var B = ["click", "touchstart"];
                h = ja(a);
                m = a.document.body;
                l = [h.F(q,
                    B, b), h.F(u, B, b), h.F(f, ["load"], F([ha, [G(r.removeChild, r, f), G(l.appendChild, l, q)]], y)), h.F(t, ["load"], G(r.removeChild, r, p)), G(m.removeChild, m, k)];
                var Q = F([ha, l], y);
                l.push(h.F(a, ["securitypolicyviolation"], function(O) {
                    (O = n(O, "blockedURI")) && 0 <= O.indexOf("https://metrika.yandex.ru") && Q()
                }));
                m.appendChild(k);
                return Q
            }

            function ud(a, c) {
                return M(function(b, d) {
                    b[d] = c;
                    return b
                }, {}, a)
            }

            function zc(a, c) {
                var b;
                return b = {}, b.width = a, b.height = c || a, b
            }

            function up(a, c) {
                try {
                    var b = c.origin
                } catch (d) {}
                b && Ma(v(Ya, va(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]) && (b = Hb(a, c.data), "appendremote" === n(b, "action") && vp(a, c, b))
            }

            function Ai(a, c, b, d) {
                var e, f, g, h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = I(a),
                    l = {};
                l.getCachedTags = Tf;
                l.form = (e = {}, e.closest = w(a, Bi), e.select = wp, e.getData = w(a, Ci), e);
                l.button = (f = {}, f.closest = w(a, Uf), f.select = Vf, f.getData = w(a, Wf), f);
                l.phone = (g = {}, g.hidePhones = F([a, null, [d]], Di), g);
                l.status = (h = {}, h.checkStatus = F([a,
                    Fa(b)
                ], xp), h);
                k.D("_u", l);
                c && pc(a, {
                    src: c
                })
            }

            function Ei(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = H(".", v(gb(v(P, Fa)), Oa)(b.split(".")));
                if (!L(d, yp) || !L(c, ["ru", "en", "tr"])) return "";
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js");
                return Fi(c) ? c : ""
            }

            function zp(a, c) {
                var b = ab(a);
                if (b) {
                    var d = b("div"),
                        e = ac(a);
                    if (e) {
                        d.innerHTML =
                            '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function() {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            pc(f.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({
                                mode: "open"
                            }) : d.createShadowRoot ?
                            g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer = f)
                    }
                }
            }

            function xp(a) {
                var c, b = Gi(a);
                a = I(a).C("getCounters", wd)();
                a = A(Y("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && L(b, a), c
            }

            function Di(a, c, b) {
                var d;
                c = Hi(a, c, {
                    ag: Ap,
                    Yh: (d = {}, d.href = !0, d)
                });
                b = Z(Boolean, A(function(f) {
                    return "*" === f ? f : Pb(f)
                }, b));
                var e = A(v(P, sa("concat", [""]), Ii("reverse"), ha), b);
                b = xd(a);
                d = Ji(a, b, 1E3);
                c = G(c.Cf, c, e);
                d.F(c);
                Bp(a, b);
                Ki(a, b);
                c()
            }

            function Ap(a, c, b) {
                var d = ab(a),
                    e = b.vb,
                    f = b.Oc,
                    g = e.parentNode,
                    h = e.textContent;
                if ("text" === b.ee && h && d && g) {
                    b = d("small");
                    Li(b);
                    var k = h.split(""),
                        l = Mi(h).length;
                    y(sa("appendChild", b), M(function(m, p) {
                        var q = m.nodes,
                            r = m.hg,
                            u = d("small");
                        u.innerHTML = p;
                        var t = Cp.test(p);
                        Li(u);
                        t && (u.style.opacity = "" + (l - r - 1) / l);
                        q.push(u);
                        return {
                            nodes: q,
                            hg: r + (t ? 1 : 0)
                        }
                    }, {
                        nodes: [],
                        hg: 0
                    }, k).nodes);
                    Dp(a, c, b, f);
                    g.insertBefore(b, e);
                    e.textContent = "";
                    return !0
                }
                return !1
            }

            function Dp(a, c, b, d) {
                function e() {
                    y(w(["style", "opacity", ""], Gc), Ba(b.childNodes));
                    if (c) {
                        var k = Ha(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = ja(a),
                    g = C,
                    h = C;
                g = f.F(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = W(a, e, 200, "ph.h.e");
                        (h || C)();
                        h = f.F(b, ["mouseleave"], function(m) {
                            m.target === b && pa(a, l)
                        })
                    }
                })
            }

            function Ki(a, c) {
                Qb(a)(Ra(C, function() {
                    var b, d = a.document.body,
                        e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    Aa("MutationObserver", a.MutationObserver) && (new MutationObserver(c.O)).observe(d, e)
                }))
            }

            function Bp(a, c) {
                return ja(a).F(a, ["load"], c.O)
            }

            function Hi(a, c, b) {
                function d(k) {
                    var l;
                    return f(a, c, k) ? null === (l = h[k.Oc]) || void 0 === l ? void 0 : l.Xc : null
                }
                var e, f = b.ag;
                b = b.Yh;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b,
                    h;
                return {
                    Cf: function(k) {
                        return new J(function(l, m) {
                            k && k.length || m();
                            h = Ni()(k);
                            Qb(a)(Ra(w({
                                ma: [],
                                Aa: 0
                            }, l), function() {
                                var p = da(a),
                                    q = p(aa),
                                    r = g.href ? Ep(a, h) : [],
                                    u = g.text ? Oi(a, h) : [];
                                l({
                                    ma: Z(ca, Z(Boolean, A(d, r.concat(u)))),
                                    Aa: p(aa) - q
                                })
                            }))
                        })
                    }
                }
            }

            function Ep(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = Pi(c);
                return M(function(e, f) {
                    var g = n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (p) {
                        h =
                            ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? Pb(k) : "",
                            m = c[l];
                        V(m) || !l && "*" !== m.Xc[0] || (e.push({
                            ee: "href",
                            vb: f,
                            Oc: l,
                            cb: Qi(k, c[l].cb),
                            Fi: g
                        }), g = Pb(h.slice(4)), l = Ni()([l ? m.Xc : [g, ""]]), e.push.apply(e, Oi(a, l, f)))
                    }
                    return e
                }, [], Ba(b.querySelectorAll("a")))
            }

            function Oi(a, c, b) {
                void 0 === b && (b = a.document.body);
                if (!b) return [];
                var d = [],
                    e = Pi(c);
                wf(a, b, function(f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                        var g = Oa(e.exec(f.textContent || "") || []);
                        y(function(h) {
                            var k = Pb(h);
                            V(c[k]) ||
                                d.push({
                                    ee: "text",
                                    vb: f,
                                    Oc: k,
                                    cb: Qi(h, c[k].cb),
                                    Fi: f.textContent || ""
                                })
                        }, g)
                    }
                }, function(f) {
                    return e.test(f.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function Ni() {
                return Xf(function(a, c) {
                    var b = A(Pb, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        cb: b,
                        Xc: c
                    };
                    var e = Ri(d);
                    e !== d && (a[e] = {
                        cb: Ri(b),
                        Xc: c
                    });
                    return a
                }, {})
            }

            function Qi(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return H("", b) + c.slice(f + 1)
            }

            function Ri(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function Pi(a) {
                return new RegExp("(?:" + H("|", A(Si, ea(a))) + ")")
            }

            function Ti(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ? wf(a, c, sa("push", e), d) : Va(e, Ui(a, c, d)));
                    y(b, e)
                }
            }

            function wf(a, c, b, d, e) {
                function f(g) {
                    return U(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                if (U(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !If(c)))
                    for (c = a.document.createTreeWalker(c,
                            e, d ? {
                                acceptNode: f
                            } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Ui(a, c, b) {
                var d = [],
                    e = v(P, sa("push", d));
                U(b) ? (b = b(c), (ia(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = Ui(a, c[b]);
                        y(e, g)
                    }
                }
                return d
            }

            function Vi(a, c, b) {
                var d;
                a = [Wi(a, c, function(e) {
                    d = e;
                    e.za.F(b)
                }), function() {
                    d && d.unsubscribe()
                }];
                return F([Yf, a], y)
            }

            function Fp(a, c, b, d) {
                var e, f, g;
                if (b) {
                    var h = n(d, "ecommerce") || {};
                    var k = n(d, "event") || "";
                    h = ra(h) && na(k) ? Rf(k, h) : void 0;
                    if (!h) a: {
                        var l = d;!ca(d) && se(a, Pa(d)) && (l = Da(l));
                        if (ca(l) && (h = l[0], k = l[1], l = l[2], na(k) && ra(l) && "event" === h)) {
                            h = Rf(k, l);
                            break a
                        }
                        h = void 0
                    }
                    if (d = h || Gp(d)) mb(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d], g), f))
                }
            }

            function Gp(a) {
                var c = n(a, "ecommerce");
                if (ra(c)) return a = Z(yc(Xi), ea(c)), a = M(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a), 0 === ea(a).length ? void 0 : a
            }

            function Rf(a, c) {
                var b, d, e = na(a) ? yd[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.Ia,
                        h = e.xh,
                        k =
                        void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if (h = l[k]) {
                        e = A(w(e.ya, Hp), h);
                        var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                        b = ea(l);
                        g && 1 < b.length && (m[f].actionField = M(function(p, q) {
                            if (q === k) return p;
                            if ("currency" === q) return m.currencyCode = l.currency, p;
                            p[Ip[q] || Zf[q] || q] = l[q];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }

            function Hp(a, c) {
                var b = {};
                y(function(d) {
                    var e = a[d] || Zf[d] || d; - 1 !== d.indexOf("item_category") ? (e = Zf.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, ea(c));
                return b
            }

            function Jp(a, c, b) {
                var d, e, f = n(b, "target");
                if (f && (f = Uf(a, f), f = Wf(a, f))) {
                    f = "?" + Mc(f);
                    var g = Jb(a, c, "Button goal. Counter " + c.id + ". Button: " + f + "."),
                        h = n(b, "isTrusted");
                    b = ia(b.isTrusted) ? void 0 : (d = {}, d.__ym = (e = {}, e.ite = Gb(h), e), d);
                    ve(a, c, "btn", g).reachGoal(f, b)
                }
            }

            function Kp(a, c, b, d) {
                var e = n(d, "target");
                d = n(d, "isTrusted");
                (e = fc("button,input", a, e)) && "submit" === e.type && (e = Bi(a, e)) && (b.push(e), W(a, F([!1, a, c, b, e, d], Yi), 300))
            }

            function Yi(a, c, b, d, e, f) {
                var g, h, k = Rb(c)(e, d),
                    l = -1 !== k;
                if (a || l) l && d.splice(k, 1), a = Ci(c, e), a = "?" + Mc(a), d = F([c, b, "Form goal. Counter " +
                    b.id + ". Form: " + a + "."
                ], Zi), f = ia(f) ? void 0 : (g = {}, g.__ym = (h = {}, h.ite = Gb(f), h), g), ve(c, b, "form", d).reachGoal(a, f)
            }

            function Zi(a, c, b) {
                return Lp(a, c).then(v(F([Jb(a, c, b), C], zd), ha))
            }

            function Ci(a, c, b) {
                return $i(a, c, ["i", "n", "p"], void 0, b)
            }

            function Mp(a, c) {
                var b;
                a((b = {}, b.clickmap = V(c) ? !0 : c, b))
            }

            function Np(a, c, b, d, e) {
                var f;
                c = {
                    K: Ja(),
                    H: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f),
                    ga: {
                        Ba: "clmap/" + e.id
                    }
                };
                d(c, e)["catch"](D(a, "c.s.c"))
            }

            function Op(a, c, b, d, e) {
                if (Ad(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Ia(c.element);
                if (e && !e(c.element, a) || L(c.button, [2, 3]) && "A" !== a || Ma(oa(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (Pp(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function Qp(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function Rp(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function aj(a, c) {
                var b = ac(a),
                    d = $f(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function we(a, c) {
                return {
                    M: function(b, d) {
                        var e, f = b.K,
                            g = b.Ha,
                            h = b.H,
                            k = b.aa;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = da(a);
                            f.Ub("rqnl", 1);
                            for (var m = Bd(a), p = 1; m[p];) p += 1;
                            b.V || (b.V = {});
                            b.V.Rb = p;
                            m[p] = (e = {}, e.protocol = ua.Qa, e.host = dc, e.resource = b.ga.Ba, e.postParams = k.ca, e.time = l(aa), e.counterType =
                                c.Z, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = xc(a), e);
                            g && (m[p].telemetry = g.l());
                            ag(a)
                        }
                        d()
                    },
                    ra: function(b, d) {
                        bj(a, b);
                        d()
                    }
                }
            }

            function bj(a, c) {
                var b = Bd(a);
                c.K && !Ua(b) && c.V && (delete b[c.V.Rb], ag(a))
            }

            function ag(a) {
                var c = Bd(a);
                Na(a).D("retryReqs", c)
            }

            function Sp(a, c) {
                if (a.Li()) {
                    var b = cj(c);
                    if (b && !cc("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Kg,
                            f = a.gb,
                            g = a.sender,
                            h = a.Wg,
                            k = f.tc,
                            l = b.href;
                        var m = nb(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? nb(m.getAttribute("title") ||
                            m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        var p = c.isTrusted;
                        if (cc("ym-external-link", b)) xe(d, f, {
                            url: l,
                            qb: !0,
                            title: m,
                            Dc: p,
                            sender: g
                        });
                        else {
                            k = k ? Ic(d, k).hostname : S(d).hostname;
                            h = RegExp("\\.(" + H("|", A(Tp, h)) + ")$", "i");
                            var q = b.protocol + "//" + b.hostname + b.pathname;
                            h = dj.test(q) || dj.test(l) || h.test(l) || h.test(q);
                            b = b.hostname;
                            ye(k) === ye(b) ? h ? xe(d, f, {
                                url: l,
                                Bc: !0,
                                Dc: p,
                                title: m,
                                sender: g
                            }) : m && e.D("il", nb(m).slice(0, 100)) : l && Up.test(l) || xe(d, f, {
                                url: l,
                                Fc: !0,
                                qb: !0,
                                Bc: h,
                                Dc: p,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function xe(a, c, b) {
                var d,
                    e, f, g = Ja();
                void 0 !== b.Dc && g.D("ite", Gb(b.Dc));
                b.Bc && g.D("dl", 1);
                b.qb && g.D("ln", 1);
                var h = b.gg || {};
                g = {
                    K: g,
                    V: {
                        title: h.title || b.title,
                        Fc: !!b.Fc,
                        ba: h.params
                    },
                    H: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.tc || S(a).href, d)
                };
                d = "Link";
                b.Bc ? d = b.qb ? "Ext link - File" : "File" : b.qb && (d = "Ext link");
                mb(a, (e = {}, e.counterKey = N(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.qb ? "external" : "internal") + " url: " + b.url, f), e));
                c = b.sender(g, c).then(Jb(a, c, d + ". Counter " + c.id + ". Url: " + b.url, b.gg));
                return Nc(a,
                    "cl.p.s", c, h.callback || C, h.ctx)
            }

            function Vp(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function Wp(a, c, b, d) {
                var e = S(a),
                    f = e.hostname;
                e = e.href;
                if (c = Cd(c).url) a = Ic(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function ej(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function Xp(a, c, b, d) {
                var e;
                if (a = Ha(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    L(b, g) || !a.params ||
                        d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Pf((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function Dh(a, c, b) {
                void 0 === b && (b = P);
                var d = jd(a);
                b(d);
                var e = w(d, Yp);
                ze(a, c, function(f) {
                    f.za.F(e)
                });
                return d
            }

            function Yp(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.O(n(b, "type"), b)
            }

            function ze(a, c, b, d) {
                void 0 === b && (b = C);
                void 0 === d && (d = !1);
                var e = xd(a);
                if (c && U(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = Da(arguments),
                            h = g[0];
                        d && e.O(h);
                        g = f.apply(c, g);
                        d || e.O(h);
                        return g
                    };
                    a = {
                        za: e,
                        unsubscribe: function() {
                            c.push =
                                f
                        }
                    };
                    b(a);
                    y(e.O, c);
                    return a
                }
            }

            function ce(a) {
                a = I(a);
                var c = a.C("dataLayer", []);
                a.D("dataLayer", c);
                return c
            }

            function nm(a, c) {
                var b, d;
                a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function fj(a, c) {
                var b = gd(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = F([a, b.ke], Zp),
                    g = w(f, $p);
                b.$.F(["initToParent"], function(h) {
                    g(d, b.children[h[1].counterId])
                }).F(["parentConnect"], function(h) {
                    g(e, b.Ga[h[1].counterId])
                });
                return {
                    $: b.$,
                    Cj: function(h, k) {
                        return new J(function(l, m) {
                            b.ke(h, k, function(p, q) {
                                l([p, q])
                            });
                            W(a, w(Sa(),
                                m), 5100, "is.o")
                        })
                    },
                    Of: function(h) {
                        var k = {
                            Rf: [],
                            we: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    Pf: function(h) {
                        var k = {
                            Rf: [],
                            we: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.Ga, k, h)
                    }
                }
            }

            function $p(a, c, b) {
                c = Z(function(d) {
                    return !L(b.info.counterId, d.we)
                }, c);
                y(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function Zp(a, c, b, d, e) {
                return (new J(function(f, g) {
                    var h = ea(b),
                        k = v(d.resolve ? d.resolve : P, id(f)),
                        l = v(d.reject ? d.reject : P, id(g));
                    d.resolve = k;
                    d.reject = l;
                    y(function(m) {
                        var p;
                        d.we.push(+m);
                        var q = b[m],
                            r = W(a, w(Sa(), l), 5100, "is.m");
                        c(q.window, z(e, (p = {}, p.toCounter = Fa(m), p)), function(u, t) {
                            pa(a, r);
                            d.Rf.push(m);
                            d.resolve && d.resolve(t)
                        })
                    }, h)
                }))["catch"](D(a, "if.b"))
            }

            function aq(a) {
                var c = C,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    U(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    U(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Lg: b,
                        ac: c,
                        ba: 1 === d.length ? a[0] : Gc(d)
                    }
                }
            }

            function Nc(a, c, b, d, e) {
                var f = F([a, d, e], bg);
                return b.then(f, function(g) {
                    f();
                    qe(a, c, g)
                })
            }

            function gj(a, c) {
                return {
                    M: function(b,
                        d) {
                        var e, f, g = (b.V || {}).ba,
                            h = b.aa;
                        h = void 0 === h ? {} : h;
                        if (g && (hj(c, g), !h.ca && b.K && b.H)) {
                            var k = kb(a, g),
                                l = ij(a),
                                m = b.K.C("pv");
                            k && !b.H.nohit && (mb(a, (e = {}, e.counterKey = N(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), m ? encodeURIComponent(k).length > ua.mg ? l.push([b.K, g]) : b.H["site-info"] = k : (h.ca = k, b.aa = h, b.Za || (b.Za = {}), b.Za.Zh = !0))
                        }
                        d()
                    },
                    ra: function(b, d) {
                        var e = ij(a),
                            f = Ha(a, c),
                            g = f && f.params;
                        g && (f = Z(v(Oc, oa(b.K)), e), y(function(h) {
                            g(h[1]);
                            h = Ae(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function Be(a, c) {
                return function(b) {
                    cg(a,
                        c, b)
                }
            }

            function bq(a, c) {
                dg(a)(function(b) {
                    delete b[c]
                })
            }

            function cg(a, c, b) {
                dg(a)(function(d) {
                    d[c] = z(d[c] || {}, b)
                })
            }

            function dg(a) {
                a = I(a);
                var c = a.C("dsjf") || va({});
                a.Ma("dsjf", c);
                return c
            }

            function cq(a, c) {
                return function(b) {
                    var d, e, f = Ha(a, c);
                    f && (ra(b) ? Pa(ea(b)) ? (b = jj(b)) && Pa(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : Jb(a, c, "First party params error. Empty object.")() : Jb(a, c, "First party params error. Not an object.")())
                }
            }

            function jj(a) {
                return M(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = ra(e);
                    if (!na(e) &&
                        !f) return c;
                    e = f ? jj(e) : e;
                    Pa(e) && c.push([d, e]);
                    return c
                }, [], Ea(a))
            }

            function kj(a, c, b) {
                void 0 === b && (b = 0);
                c = Ea(c);
                c = M(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = ra(g);
                    if (!na(g) && !h) return d;
                    h ? g = kj(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = dq(g) : "email" === f && (g = eq(g)), g = lj(a, g)) : g = J.resolve(g);
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return J.all(c)
            }

            function eq(a) {
                var c = nb(a).toLowerCase().split("@"),
                    b = c[0];
                c = c[1];
                if (!c) return a;
                c = c.replace("googlemail.com", "gmail.com");
                mj(c) && (c = "yandex.ru");
                "yandex.ru" === c ? b = b.replace(eg, "-") : "gmail.com" === c && (b = b.replace(eg, ""));
                a = le(b, "+"); - 1 !== a && (b = b.slice(0, a));
                return b + "@" + c
            }

            function dq(a) {
                a = Pb(a);
                return "8" === a[0] ? "7" + a.slice(1) : a
            }

            function lj(a, c) {
                return new J(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result");
                            var k = (h || "").indexOf(","); - 1 !== k ? b(h.substring(k + 1)) : d(mc("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function Ha(a, c) {
                var b = I(a).C("counters", {}),
                    d = N(c);
                return b[d]
            }

            function nj(a, c) {
                I(a).D("dce:" + c, !0);
                var b = I(a).C("dclq:" + c);
                b && (y(function(d) {
                    var e = d[0];
                    d = d[1];
                    ha.apply(void 0, za([Dd(a, c)[e]], d))
                }, b), Ed(b))
            }

            function Jb(a, c, b, d) {
                return fg(c) ? C : w(F(za([a, N(c)], d ? [b + ". Params:", d] : [b]), vb), ha)
            }

            function vb() {
                var a = Da(arguments),
                    c = a.slice(2);
                Dd(a[0], a[1]).log.apply(vb, c)
            }

            function Jf(a) {
                var c = "1" === Nb(a).C("debug"),
                    b = Ce(a, "1") || Ce(a, "2");
                a = a._ym_debug;
                return {
                    Dh: c,
                    Nh: a || b,
                    isEnabled: Ma(Boolean, [c, a, b])
                }
            }

            function Ce(a, c) {
                return -1 < S(a).href.indexOf("_ym_debug=" + c)
            }

            function fq(a, c) {
                return {
                    log: Pc(a, "log", c, C),
                    warn: Pc(a, "log", c, C),
                    error: Pc(a, "log", c, C)
                }
            }

            function Pc(a, c, b, d) {
                return function() {
                    var e, f, g = Da(arguments);
                    mb(a, (e = {}, e.counterKey = b, e.name = "log", e.data = (f = {}, f.args = g, f.type = c, f), e));
                    return d.apply(void 0, g)
                }
            }

            function qa(a, c) {
                var b = N(a);
                return oj()(gq(b)).then(c)
            }

            function hq(a, c, b) {
                var d, e;
                c = N(c);
                var f = gg(a);
                b = z({
                    Yg: f(aa)
                }, b);
                mb(a, (d = {}, d.counterKey = c, d.name = "counterSettings", d.data =
                    (e = {}, e.settings = b, e), d));
                return oj()(iq(c, b))
            }

            function iq(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.ti = c, d.Ff = !0, d.Ef ? d.Ef(c) : d.promise = J.resolve(c)) : b[a] = {
                        promise: J.resolve(c),
                        ti: c,
                        Ff: !0
                    }
                }
            }

            function hg(a) {
                return !qd(a) && ig(a)
            }

            function Fd(a) {
                return ab(a) ? w(a, jq) : !1
            }

            function zb(a) {
                if (a.fetch) {
                    var c = n(a, "AbortController");
                    return F([a, c ? new c : void 0], kq)
                }
                return !1
            }

            function ig(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Aa("sendBeacon", c) ? F([a, G(c, n(a, "navigator"))], lq) : !1
            }

            function lq(a, c, b, d) {
                return new J(function(e,
                    f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = z(d.ab, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + Mc(h) + (d.ca ? "&" + d.ca : "");
                    return 2E3 < g.length ? f(Sa("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function jq(a, c, b) {
                return new J(function(d, e) {
                    var f, g, h = "_ymjsp" + Wa(a),
                        k = z((f = {}, f.callback = h, f), b.ab),
                        l = F([a, h], mq);
                    a[h] = function(p) {
                        try {
                            l(), rc(m), d(p)
                        } catch (q) {
                            e(q)
                        }
                    };
                    k.wmode = "5";
                    var m = pc(a, (g = {}, g.src = pj(c, b, k), g));
                    if (!m) return l(), e(mc("jp.s"));
                    f = w(m, rc);
                    f = v(f, w(Sa(b.ha), e));
                    g = Gd(a, f, b.Na || 1E4);
                    g = F([a, g], pa);
                    m.onload =
                        g;
                    m.onerror = v(l, g, f)
                })
            }

            function mq(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Qc(a) {
                var c = ab(a);
                return c ? F([a, c], nq) : !1
            }

            function nq(a, c, b, d) {
                return new J(function(e, f) {
                    var g = ac(a),
                        h = c("img"),
                        k = v(w(h, rc), w(Sa(d.ha), f)),
                        l = Gd(a, k, d.Na || 3E3);
                    h.onerror = k;
                    h.onload = v(w(h, rc), w(null, e), F([a, l], pa));
                    k = z({}, d.ab);
                    delete k.wmode;
                    h.src = pj(b, d, k);
                    sd(a) && (z(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function kq(a, c, b, d) {
                var e, f = z(d.Bb ? (e = {}, e.wmode =
                        "7", e) : {}, d.ab),
                    g = c || {
                        signal: void 0,
                        abort: C
                    },
                    h = a.fetch(b + "?" + Mc(f), {
                        method: d.Zc,
                        body: d.ca,
                        credentials: !1 === d.Ce ? "omit" : "include",
                        headers: d.$a,
                        signal: g.signal
                    }),
                    k = w(d.ha, Sa);
                return new J(function(l, m) {
                    d.Na && Gd(a, function() {
                        try {
                            g.abort()
                        } catch (p) {}
                        m(k())
                    }, d.Na);
                    return h.then(function(p) {
                        if (!p.ok) {
                            if (d.fe) return Ta(qj(p));
                            $d(d.ha)
                        }
                        return d.fe ? p.text() : d.Bb ? p.json() : null
                    }).then(l)["catch"](w(k(), m))
                })
            }

            function Ab(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (oq.test(a.location.host) &&
                                a.opera && U(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? w(a, pq) : !1
            }

            function pq(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.ca,
                    g = z(b.Bb ? (d = {}, d.wmode = "7", d) : {}, b.ab);
                return new J(function(h, k) {
                    e.open(b.Zc || "GET", c + "?" + Mc(g), !0);
                    e.withCredentials = !1 !== b.Ce;
                    b.Na && (e.timeout = b.Na);
                    rj(Ea, gb(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.$a);
                    var l = F([a, e, Sa(b.ha), b.Bb, b.fe, h, k], qq);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function qq(a,
                c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(qj(c));
                    else {
                        e = null;
                        if (d) try {
                            (e = Hb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                return h
            }

            function pj(a, c, b) {
                (b = Mc(b)) && (a += "?" + b);
                c.ca && (a += (b ? "&" : "?") + c.ca);
                return a
            }

            function rq(a, c, b) {
                var d = A(Oc, Sb[c] || Tb);
                y(function(e) {
                    return d.unshift(e)
                }, jg);
                return A(v(Rc([a, b]), ha), d)
            }

            function sj(a, c) {
                var b = S(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!na(c) || V(c)) return d;
                b = c.replace(tj, "");
                if (-1 !== b.search(sq)) return b;
                var g =
                    b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, H("/", d);
                return ""
            }

            function De(a, c) {
                return {
                    M: function(b, d) {
                        var e = uj(c);
                        e = F([b, e, d], tq);
                        uq(a, c, e)
                    },
                    ra: function(b, d) {
                        var e = b.K,
                            f = uj(c);
                        if (e) {
                            var g = f.va;
                            f.Re === e && g && (y(ha, g), f.va = null)
                        }
                        d()
                    }
                }
            }

            function tq(a, c, b) {
                var d = a.K;
                d ? te(a) ? (c.Re = d, b()) : c.va ? c.va.push(b) : b() :
                    b()
            }

            function te(a) {
                return (a = a.K) && a.C("pv") && !a.C("ar")
            }

            function uq(a, c, b) {
                if (Ee(a) && db(a)) {
                    var d = vq(c);
                    if (!d.Oh) {
                        d.Oh = !0;
                        c = gd(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.va = [];
                        var e = function() {
                            d.va && (y(ha, d.va), d.va = null)
                        };
                        W(a, e, 3E3);
                        c.$.F(["initToChild"], e)
                    }
                    d.va ? d.va.push(b) : b()
                } else b()
            }

            function vj(a, c) {
                return {
                    M: function(b, d) {
                        var e = b.K;
                        if (e && (!c || c.Nf)) {
                            var f = a.document.title;
                            b.V && b.V.title && (f = b.V.title);
                            var g = gc("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f :
                                "");
                            f = f.slice(0, ua.ng);
                            e.D("t", f)
                        }
                        d()
                    }
                }
            }

            function Kb(a) {
                return function(c, b) {
                    return {
                        M: function(d, e) {
                            var f = d.K,
                                g = d.H;
                            f && g && y(function(h) {
                                var k = Fe[h],
                                    l = "bi",
                                    m = f;
                                k || (k = kg[h], l = "tel", m = de(d));
                                k && (k = E(l + ":" + h, k, null)(c, b, d), m.Ub(h, k))
                            }, a || wq());
                            e()
                        }
                    }
                }
            }

            function xq(a, c) {
                var b = Hd(a);
                c.F(["initToParent"], function(d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).F(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.O("parentConnect", [e, d])
                }).F(["parentConnect"],
                    function(d) {
                        var e = d[1];
                        e.counterId && (b.Ga[e.counterId] = {
                            info: e,
                            window: d[0].source
                        })
                    })
            }

            function yq(a) {
                if (Aa("MutationObserver", a.MutationObserver)) {
                    var c = Hd(a).children,
                        b = new a.MutationObserver(function() {
                            y(function(d) {
                                n(c[d], "window.window") || delete c[d]
                            }, ea(c))
                        });
                    Qb(a)(Ra(C, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function zq(a, c) {
                return function(b, d) {
                    var e, f = {
                        nc: da(a)(aa),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.nc = Fa(b[0]), f.key = parseFloat(b[1]), f.dir = Fa(b[2]));
                    z(d, c);
                    var g = (e = {
                        data: d
                    }, e.__yminfo = H(":", ["__yminfo", f.nc, f.key, f.dir]), e);
                    return {
                        meta: f,
                        Vf: kb(a, g) || ""
                    }
                }
            }

            function Qb(a, c) {
                function b(e) {
                    n(c, d) ? e() : W(a, w(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return va(function(e, f) {
                    b(f)
                })
            }

            function Id(a, c) {
                var b = c.Od,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = Nb(a),
                    f = Na(a),
                    g = da(a)(lg),
                    h = wj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.C("d");
                xj(a, c);
                var m = !1;
                !h && k && (h = k, m = !0);
                if (!h) h = H("", [g, Wa(a, 1E6, 999999999)]), m = !0;
                else if (!l || 15768E3 <
                    g - Fa(l)) m = !0;
                m && !c.tb && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
                f.D(d, h);
                return h
            }

            function Aq(a, c) {
                return !c.tb && xj(a, c)
            }

            function wj(a, c) {
                var b = Na(a),
                    d = Nb(a),
                    e = c.Od || "uid";
                return [b.C(e), d.C(e)]
            }

            function hi(a, c, b) {
                mg(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = yj(a);
                (d = d && d.metrika_enabled) && zj(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function mg(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (ii(a, ne, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + Bq(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" +
                            k.toUTCString() + ";"
                    }
                    e && (d = e.replace(Cq, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (Aj(a)[c] = b)
                    } catch (l) {}
                }
            }

            function ne(a, c) {
                var b = Aj(a);
                return b ? b[c] || null : null
            }

            function yj(a) {
                try {
                    var c = a.document.cookie;
                    if (!ia(c)) {
                        var b = {};
                        y(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[nb(d[0])] = nb(Bj(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function ii(a, c, b) {
                return !ng.length || L(b, og) ? !0 : M(function(d, e) {
                    return d && e(a, c, b)
                }, !0, ng)
            }

            function xc(a) {
                var c = I(a),
                    b = c.C("hitId");
                b ||
                    (b = Wa(a), c.D("hitId", b));
                return b
            }

            function mj(a) {
                var c = a.match(Cj);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return L(c, pg) ? c : !1;
                    if (a) return pg[0]
                }
                return !1
            }

            function S(a) {
                return M(function(c, b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, Dq)
            }

            function Wf(a, c, b) {
                var d = Ia(c);
                return d && $i(a, c, Oa(["p", Eq[d], "c"]), Vf, b)
            }

            function Uf(a, c) {
                var b = fc(qg, a, c);
                if (!b) {
                    var d = fc("div", a, c);
                    d && (ob(qg + ",div", d).length || (b = d))
                }
                return b
            }

            function $i(a, c, b, d, e) {
                return M(function(f, g) {
                    var h = null;
                    g in Dj ? h = c.getAttribute && c.getAttribute(Dj[g]) :
                        g in Sc && (h = "p" === g ? Sc[g](a, c, e) : "c" === g ? Sc[g](a, c, d) : Sc[g](a, c));
                    h && (h = h.slice(0, Ej[g] || 100), f[g] = rg[g] ? "" + sc(h) : h);
                    return f
                }, {}, b)
            }

            function $h(a, c, b) {
                if (Jd(a)) return Ba(b.querySelectorAll(c));
                var d = Fj(c.split(" "), b);
                return Z(function(e, f) {
                    return Rb(a)(e, d) === f
                }, d)
            }

            function Fj(a, c) {
                var b = za(a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? qc(w(b, Fj), Ba(d)) : Ba(d)
            }

            function tc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = ob(a, c);
                return b && b.length ? b[0] : null
            }

            function ob(a,
                c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? Ba(b) : []
            }

            function cj(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function pc(a, c) {
                var b = a.document,
                    d = z({
                        type: "text/javascript",
                        charset: "utf-8",
                        async: !0
                    }, c),
                    e = ab(a);
                if (e) {
                    var f = e("script");
                    rj(Ea, gb(function(l) {
                        var m = l[0];
                        l = l[1];
                        "async" === m && l ? f.async = !0 : f[m] = l
                    }))(d);
                    try {
                        var g = gc("getElementsByTagName", b),
                            h = g("head")[0];
                        if (!h) {
                            var k = g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {}
                }
            }

            function Fq(a, c, b) {
                var d = Gj(c);
                L(b, d.ub) || d.ub.push(b);
                if (Ua(d.lb)) {
                    b = ab(a);
                    if (!b) return null;
                    b = b("iframe");
                    z(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = ac(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.lb = b
                } else(a = n(d.lb, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.lb
            }

            function Gq(a, c) {
                var b = ca(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = H(", ", A(function(e) {
                        return "." + e
                    }, b));
                    return Ba(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return qc(v(sa("getElementsByClassName", c), Ba), b);
                d = c.getElementsByTagName("*");
                b = "(" + H("|", b) + ")";
                return Z(w(b, cc), Ba(d))
            }

            function sg(a, c, b) {
                for (var d = "", e = Tf(), f = Ia(c) || "*"; c && c.parentNode && !L(f, ["BODY", "HTML"]);) d += e[f] ||
                    "*", d += Hj(a, c, b) || "", c = c.parentElement, f = Ia(c) || "*";
                return nb(d, 128)
            }

            function Hj(a, c, b) {
                if (a = Ge(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function Ge(a, c) {
                var b = n(a, "document");
                if (!c || c === b.documentElement) return null;
                if (c === Ac(a)) return b.documentElement;
                b = null;
                try {
                    b = c.parentNode
                } catch (d) {}
                return b
            }

            function Ff(a, c) {
                var b = tg(a, c),
                    d = b.left;
                b = b.top;
                var e = He(a, c);
                return [d, b, e[0], e[1]]
            }

            function He(a,
                c) {
                var b = n(a, "document");
                if (c === Ac(a) || c === b.documentElement) {
                    b = ac(a);
                    var d = Tc(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = Jc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function tg(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Ia(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === Ac(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = Jc(b)) return b = $f(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function nb(a, c) {
                if (a) {
                    var b = Ij ? Ij.call(a) : ("" + a).replace(tj, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function fc(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && Aa("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = gi(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (Jd(c)) {
                    for (a = Ba((c.document || c.ownerDocument).querySelectorAll(a)); b &&
                        1 === b.nodeType && -1 === Rb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function Jd(a) {
                return !(!Aa("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function Jj(a, c, b) {
                var d = c.top,
                    e = c.bottom,
                    f = c.left,
                    g = b.w;
                b = b.h;
                a = a.Math;
                c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
            }

            function Kj(a) {
                return Ie(a) && !Ma(oa(a.type), Hq) ? Je(a) ? !a.checked : !a.value : Iq(a) ? !a.value : Jq(a) ? 0 > a.selectedIndex :
                    !0
            }

            function Ia(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (na(c)) return c;
                    c = a.tagName;
                    if (na(c)) return c
                } catch (b) {}
            }

            function Lj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Rb(a)(c, Ba(b))
            }

            function Kq(a, c, b) {
                b = gc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (Aa("(Event|Object|constructor)", e) || ug(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = gc("createEvent", n(a, "document"))) && U(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d &&
                    b(d)
            }

            function Jc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.tf && c.tf & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function $f(a) {
                var c = Ac(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function Tc(a) {
                var c = Ke(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b),
                        a.Math.round(c[1] * b)
                    ]
                }
                c = ac(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function Ke(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return ia(c) || ia(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function ac(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : Ac(a) || b
            }

            function Ac(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function cc(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" +
                        a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function Bc(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function rc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Ub(a) {
                return a ? a.innerText || "" : ""
            }

            function If(a) {
                if (ia(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function rf(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c + "_";
                return {
                    Hd: Lq(a),
                    C: function(e, f) {
                        var g = Mj(a,
                            "" + d + e);
                        return Ua(g) && !V(f) ? f : g
                    },
                    D: function(e, f) {
                        Nj(a, "" + d + e, f);
                        return this
                    },
                    Hb: function(e) {
                        Oj(a, "" + d + e);
                        return this
                    }
                }
            }

            function Nj(a, c, b) {
                var d = vg(a);
                a = kb(a, b);
                if (!Ua(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function Mj(a, c) {
                var b = vg(a);
                try {
                    return Hb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function Oj(a, c) {
                var b = vg(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function vg(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function kb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }

            function de(a, c, b) {
                void 0 ===
                    b && (b = null);
                a.Ha || (a.Ha = wg());
                c && a.Ha.Ub(c, b);
                return a.Ha
            }

            function Le(a) {
                return {
                    M: function(c, b) {
                        var d = a.document,
                            e = c.K;
                        if (e && xg(a)) {
                            var f = ja(a),
                                g = function(h) {
                                    xg(a) || (f.Xb(d, Pj, g), b());
                                    return h
                                };
                            f.F(d, Pj, g);
                            e.D("pr", "1")
                        } else b()
                    }
                }
            }

            function Kd(a) {
                return function(c, b, d) {
                    return function(e, f) {
                        var g = A(v(Oc, Rc([c, f]), ha), Qj[a] || []);
                        g = Va(g, d);
                        return Rj(c, b, g)(e)
                    }
                }
            }

            function Rj(a, c, b) {
                var d = Vb(a, c);
                return function(e) {
                    return Sj(b, e, !0).then(function() {
                        var f = e.ga || {},
                            g = f.Fh,
                            h = void 0 === g ? "" : g;
                        g = f.Ba;
                        var k = void 0 ===
                            g ? "" : g;
                        f = f.Hh;
                        f = A(function(l) {
                            return ua.Qa + "//" + ("" + h + l || dc) + "/" + k
                        }, void 0 === f ? [dc] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.Qc;
                        f = f.eg;
                        e.wi = g;
                        e.xi = f;
                        return Sj(b, e).then(w(g, P))
                    })
                }
            }

            function Vb(a, c) {
                return function(b, d) {
                    return Tj(a, c, d, b)
                }
            }

            function Tj(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = z({
                        ha: []
                    }, d.aa),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.$a && h.$a["Content-Type"] || !h.ca || (h.$a = z({}, h.$a, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.ca = "site-info=" + je(h.ca));
                h.Zc = h.ca ? "POST" : "GET";
                h.ab = Mq(a, d, l);
                h.Ba = (d.ga || {}).Ba;
                h.ha.push(l);
                z(d.aa, h);
                g = "" + m + (d.Za && d.Za.Zh ? "/1" : "");
                var p = 0;
                p = Nq(a, g, h);
                return k(g, h).then(function(q) {
                    var r = p,
                        u, t;
                    mb(a, (u = {}, u.name = "requestSuccess", u.data = (t = {}, t.body = q, t.requestId = r, t), u));
                    return {
                        Qc: q,
                        eg: e
                    }
                })["catch"](function(q) {
                    var r = p,
                        u, t;
                    mb(a, (u = {}, u.name = "requestFail", u.data = (t = {}, t.error = q, t.requestId = r, t), u));
                    r = f + 1 >= c.length;
                    u = e + 1 >= b.length;
                    r && u && Ta(q);
                    return Tj(a, c, b, d, !u && r ? e + 1 : e, r ? 0 : f + 1)
                })
            }

            function Mq(a, c, b) {
                var d = z({}, c.H);
                a = da(a);
                c.K && (d["browser-info"] = Ja(c.K.l()).D("st", a(lg)).Ca());
                !d.t && (c = c.Ha) && (c.D("ti", b), d.t = c.Ca());
                return d
            }

            function Nq(a, c, b) {
                var d, e, f, g = Wa(a),
                    h = b.ha,
                    k = b.ca,
                    l = b.$a,
                    m = b.ab;
                b = b.Zc;
                mb(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = k, f.debugStack = h, f.rHeaders = l, f.rQuery = m, f.verb = b, f), e), d));
                return g
            }

            function Mc(a) {
                return a ? v(Ea, Xf(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    V(e) || ia(e) || c.push(d + "=" + je(e));
                    return c
                }, []), rd("&"))(a) : ""
            }

            function Oq(a) {
                return a ? v(gb(function(c) {
                    c =
                        c.split("=");
                    var b = c[1];
                    return [c[0], ia(b) ? void 0 : Bj(b)]
                }), Xf(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function Bj(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function je(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = H("", Z(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function Uj(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !ia(d) && Vj(a[c], b, d)
            }

            function Vj(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g &&
                        h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function Sj(a, c, b) {
                void 0 === b && (b = !1);
                return new J(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        M: f,
                        ra: f
                    });
                    var h = nc(g, function(k, l) {
                        var m = b ? k.M : k.ra;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(Pq), e(p)
                        } else l()
                    });
                    h(Wj)
                })
            }

            function Lb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ja(a);
                    var e = "__ym__promise_" + Wa(a) + "_" + Wa(a),
                        f = C;
                    d = D(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation && g.stopPropagation(),
                            c())
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*")
                } else W(a, c, 0, d)
            }

            function xh(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = nc(c, b);
                oc(a, c, d)(Ra(D(a, e), C))
            }

            function oc(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Xj);
                yg = Infinity === b;
                return va(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(Qq);
                        if (c(Ld)) return f(h), Yj(a);
                        yg ? (c(d(a, 1E4)), f(h), Yj(a)) : W(a, g, 100)
                    }
                    var h = [];
                    Rq(g)
                })
            }

            function Yj(a) {
                if (zg.length) {
                    var c = zg.shift();
                    yg ? c() : W(a, c, 100)
                } else Ag = !1
            }

            function Rq(a) {
                Ag ?
                    zg.push(a) : (Ag = !0, a())
            }

            function yf(a) {
                return va(function(c, b) {
                    b(a)
                })
            }

            function Wo(a) {
                return va(function(c, b) {
                    a.then(b, c)
                })
            }

            function Sq(a) {
                var c = [],
                    b = 0;
                return va(function(d, e) {
                    y(function(f, g) {
                        f(Ra(d, function(h) {
                            try {
                                c[g] = h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function Vo(a) {
                var c = [],
                    b = !1;
                return va(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    y(function(g) {
                        g(Ra(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Ra(a, c) {
                return function(b) {
                    return b(a, c)
                }
            }

            function nc(a,
                c) {
                void 0 === c && (c = P);
                return va({
                    Sa: a,
                    Kd: c,
                    pe: !1,
                    xa: 0
                })
            }

            function Wj(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.xa += 1
                    }
                    b = !1;
                    a.Kd(a.Sa[a.xa], function() {
                        d()
                    });
                    b || (a.xa += 1, d = w(a, Wj))
                }
                for (var b = !0; !Ld(a) && b;) c()
            }

            function Xj(a, c) {
                return function(b) {
                    var d = da(a),
                        e = d(aa);
                    return Zj(function(f, g) {
                        d(aa) - e >= c && g(ak)
                    })(b)
                }
            }

            function Me(a, c) {
                return function(b) {
                    var d = da(a),
                        e = d(aa);
                    return Ne(function(f) {
                        d(aa) - e >= c && ak(f)
                    })(b)
                }
            }

            function Ne(a) {
                return function(c) {
                    for (var b; c.Sa.length && !Ld(c);) b = c.Sa.pop(), b = c.Kd(b, c.Sa), a(c);
                    return b
                }
            }

            function Tq(a) {
                Ld(a) && Ta(mc("i"));
                var c = a.Kd(a.Sa[a.xa]);
                a.xa += 1;
                return c
            }

            function Qq(a) {
                a.pe = !1
            }

            function ak(a) {
                a.pe = !0
            }

            function Pq(a) {
                a.xa = a.Sa.length
            }

            function Ld(a) {
                return a.pe || a.Sa.length <= a.xa
            }

            function xb(a) {
                a = da(a);
                return Math.round(a(Bg) / 50)
            }

            function Bg(a) {
                var c = a.Aa,
                    b = c[1];
                a = c[0] && b ? b() : aa(a) - a.Ih;
                return Math.round(a)
            }

            function lg(a) {
                return Math.round(aa(a) / 1E3)
            }

            function jb(a) {
                return Math.floor(aa(a) / 1E3 / 60)
            }

            function aa(a) {
                var c = a.ye;
                return 0 !== c ? c : Cg(a.l, a.Aa)
            }

            function gg(a) {
                var c =
                    ja(a),
                    b = bk(a),
                    d = {
                        l: a,
                        ye: 0,
                        Aa: b,
                        Ih: Cg(a, b)
                    },
                    e = b[1];
                b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
                    0 === d.ye && (d.ye = Cg(a, d.Aa))
                });
                return va(d)
            }

            function Uq(a) {
                return (10 > a ? "0" : "") + a
            }

            function Ji(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = W(a, d, b), e.O(h))
                }
                var e = xd(a),
                    f, g = !1,
                    h;
                c.F(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return C
                });
                return e
            }

            function Vq(a, c) {
                return a.clearInterval(c)
            }

            function Wq(a, c, b, d) {
                return a.setInterval(D(a, "i.err." + (d || "def"), c), b)
            }

            function W(a, c, b, d) {
                return Gd(a, D(a, "d.err." + (d || "def"), c), b)
            }

            function jd(a) {
                var c = {};
                return {
                    F: function(b, d) {
                        y(function(e) {
                            n(c, e) || (c[e] = xd(a));
                            c[e].F(d)
                        }, b);
                        return this
                    },
                    ja: function(b, d) {
                        y(function(e) {
                            n(c, e) && c[e].ja(d)
                        }, b);
                        return this
                    },
                    O: function(b, d) {
                        return n(c, b) ? D(a, "e." + d, c[b].O)(d) : []
                    }
                }
            }

            function xd(a) {
                var c = [],
                    b = {};
                b.uj = c;
                b.F = v(sa("push", c), w(b, P));
                b.ja = v(Bb(Rb(a))(c), Bb(sa("splice", c))(1), w(b, P));
                b.O = v(P, Bb(ha), Xq(c));
                return b
            }

            function ck(a, c, b, d, e) {
                var f = a.addEventListener && a.removeEventListener,
                    g = !f && a.attachEvent && a.detachEvent;
                if (f || g)
                    if (e = e ? f ? "removeEventListener" :
                        "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d);
                    else a[e]("on" + c, b)
            }

            function E(a, c, b) {
                return function() {
                    return D(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function D(a, c, b, d, e) {
                var f = Ta,
                    g = b || f;
                return function() {
                    var h = d;
                    try {
                        h = g.apply(e || null, arguments)
                    } catch (k) {
                        qe(a, c, k)
                    }
                    return h
                }
            }

            function Cg(a, c) {
                var b = c || bk(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && U(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function bk(a) {
                a = Qf(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = G(b, a));
                return [c, b]
            }

            function Qf(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function qe(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Ta(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                Yq(d) || Ma(v(sa("indexOf", d), oa(-1), Wb), Zq) || $q(d) && .1 <= a.Math.random() || y(v(P, Rc(["jserrs", d, c, e]), ha), dk)
            }

            function $d() {
                var a = Da(arguments);
                return Ta(Sa(a))
            }

            function Sa(a) {
                var c = "";
                ca(a) ? c = H(".", a) : na(a) && (c = a);
                return mc("err.kn(" + ua.fb + ")" +
                    c)
            }

            function qj(a) {
                return mc("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
            }

            function ar(a) {
                this.message = a
            }

            function mb(a, c) {
                var b = c.oa;
                if (b) {
                    var d = b.split(":");
                    b = d[1];
                    d = ek(sf(d[0]));
                    if ("1" === b || d) return
                }
                b = br(a);
                1E3 === b.length && b.shift();
                b.push(c)
            }

            function fk(a) {
                return M(function(c, b) {
                    c[df[b[0]].ea] = b[1];
                    return c
                }, {}, Ea(a))
            }

            function hc(a) {
                y(function(c) {
                    var b = c[1];
                    df[c[0]] = {
                        ea: b.ea,
                        Ua: b.Ua
                    }
                }, Ea(a))
            }

            function Ml(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    Z: d,
                    ic: e,
                    ba: b
                };
                a = M(function(g, h) {
                    var k = h[1],
                        l = k.Ua;
                    k = f[k.ea];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, Ea(c));
                hj(a, a.ba || {});
                return a
            }

            function cr(a) {
                a = N(a);
                return ic[a] && ic[a].Ki || null
            }

            function gk(a) {
                a = N(a);
                return ic[a] && ic[a].Ji
            }

            function hj(a, c) {
                var b = N(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                ic[b] || (ic[b] = {});
                if (d || e) ic[b].Ji = d, ic[b].Ki = e
            }

            function hk(a) {
                return Oe(a) || pd(a) || /mobile/i.test(fb(a)) || !V(n(a, "orientation"))
            }

            function of (a, c) {
                if (Md(a) && c) {
                    var b = fb(a).match(Dg);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function pf(a, c) {
                var b = fb(a);
                return b && (b = b.match(dr)) && 1 < b.length ? Fa(b[1]) >= c : !1
            }

            function xg(a) {
                return L("prerender", A(w(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Wa(a, c, b) {
                var d = V(b);
                V(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function er() {
                var a = Da(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) Ad(b, d) && (c[d] = b[d]);
                    Ad(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function ik(a) {
                return V(a) ? [] : Nd(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], jk(a))
            }

            function jk(a) {
                var c = [],
                    b;
                for (b in a) Ad(a, b) && c.push(b);
                return c
            }

            function sf(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }

            function se(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Eg(c)
            }

            function fr(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function Va(a, c) {
                y(v(P, sa("push", a)), c);
                return a
            }

            function Fg(a, c) {
                return Array.prototype.sort.call(c, a)
            }

            function Ed(a) {
                return a.splice(0, a.length)
            }

            function Ba(a) {
                return a ?
                    ca(a) ? a : Pe ? Pe(a) : "number" === typeof a.length && 0 <= a.length ? kk(a) : [] : []
            }

            function zd(a, c, b) {
                return b ? a : c
            }

            function gr(a, c) {
                return Nd(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(ca(d) ? d : [d])
                }, [], c)
            }

            function lk(a, c) {
                return Nd(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function hr(a, c) {
                if (!Md(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function ca(a) {
                if (Od) return Od(a);
                (Od = La(Array.isArray, "isArray")) || (Od = ir);
                return Od(a)
            }

            function jr(a, c) {
                for (var b =
                        "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function kr(a, c) {
                return 1 <= mk(oa(a), c).length
            }

            function lr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b)) return c[b]
            }

            function mk(a, c) {
                return Nd(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function bg(a, c, b) {
                try {
                    if (U(c)) {
                        var d = Da(arguments).slice(3);
                        ia(b) ? c.apply(void 0, d) : G.apply(void 0, za([c, b], d))()
                    }
                } catch (e) {
                    Gd(a, w(e, Ta), 0)
                }
            }

            function Ta(a) {
                throw a;
            }

            function Gd(a, c, b) {
                return gc("setTimeout", a)(c, b)
            }

            function pa(a, c) {
                return gc("clearTimeout",
                    a)(c)
            }

            function wd() {
                return []
            }

            function Cc() {
                return {}
            }

            function gc(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function pb(a, c, b) {
                return function() {
                    var d = Da(arguments),
                        e = d[0];
                    d = d.slice(1);
                    var f = I(e),
                        g = b ? "global" : "m1094",
                        h = f.C(g, {}),
                        k = n(h, a);
                    k || (k = x(c), h[a] = k, f.D(g, h));
                    return k.apply(void 0, za([e], d))
                }
            }

            function Gc(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                M(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function n(a, c) {
                return a ? M(function(b, d) {
                    if (ia(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function Pd(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    Ma: function(b, d) {
                        Gg.call(c, b) || (c[b] = d);
                        return this
                    },
                    D: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    C: function(b, d) {
                        var e = c[b];
                        return Gg.call(c, b) || V(d) ? e : d
                    }
                }
            }

            function Ad(a, c) {
                return ia(a) ? !1 : Gg.call(a, c)
            }

            function x(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : P;
                return function() {
                    var f =
                        Da(arguments),
                        g = e.apply(void 0, f),
                        h = Hg(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Rb(a) {
                if (Ig) return Ig;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && La(a.Array.prototype.indexOf, "indexOf");
                return Ig = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : mr
            }

            function mr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function ha(a, c) {
                return c ? a(c) : a()
            }

            function v() {
                var a = Da(arguments),
                    c = a.shift();
                return function() {
                    var b =
                        c.apply(void 0, arguments);
                    return M(nk, b, a)
                }
            }

            function Xf(a, c) {
                return F([a, c], M)
            }

            function Nd(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function Ya(a) {
                return sa("test", a)
            }

            function sa(a, c) {
                return G(c[a], c)
            }

            function w(a, c) {
                return G(c, null, a)
            }

            function F(a, c) {
                return G.apply(void 0, za([c, null], a))
            }

            function nr() {
                var a = Da(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = za(d, Da(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, za([b], e));
                    if (b) {
                        for (var f =
                                "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && ok(f, e, b);
                        delete b[f];
                        return e
                    }
                    return ok(c, e)
                }
            }

            function ok(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                U(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function Da(a) {
                if (Pe) try {
                    return Pe(a)
                } catch (c) {}
                return kk(a)
            }

            function kk(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function ra(a) {
                return !Ua(a) && !V(a) && "[object Object]" ===
                    Eg(a)
            }

            function ia(a) {
                return V(a) || Ua(a)
            }

            function U(a) {
                return "function" === typeof a
            }

            function Bb(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function la(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function nk(a, c) {
                return c(a)
            }

            function Tp(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(eg, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g,
                    "\\{").replace(/\}/g, "\\}")
            }

            function or(a) {
                return "" + a
            }

            function Fb(a, c) {
                return !(!a || -1 === le(a, c))
            }

            function le(a, c) {
                if (pk) var b = pk.call(a, c);
                else a: {
                    b = 0;
                    for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
                        b = a[e] === c[b] ? b + 1 : 0;
                        if (b === c.length) {
                            b = e - c.length + 1;
                            break a
                        }
                        if (!b && e > d) break
                    }
                    b = -1
                }
                return b
            }

            function na(a) {
                return "string" === typeof a
            }

            function Eg(a) {
                return Object.prototype.toString.call(a)
            }

            function Jg() {
                Jg = Object.assign || function(a) {
                    for (var c, b = 1, d = arguments.length; b < d; b++) {
                        c = arguments[b];
                        for (var e in c) Object.prototype.hasOwnProperty.call(c,
                            e) && (a[e] = c[e])
                    }
                    return a
                };
                return Jg.apply(this, arguments)
            }

            function Kg(a, c) {
                Kg = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return Kg(a, c)
            }

            function La(a, c) {
                return Aa(c, a) && a
            }

            function Aa(a, c) {
                var b = Qe(a, c);
                c && !b && Lg.push([a, c]);
                return b
            }

            function Qe(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f =
                        "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function C() {}

            function Wb(a) {
                return !a
            }

            function qb(a, c) {
                return c
            }

            function P(a) {
                return a
            }

            function Ka(a, c) {
                function b() {
                    this.constructor = a
                }
                Kg(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function za() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function pr() {}

            function qr(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function Ga(a) {
                if (!(this instanceof Ga)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.Ja = 0;
                this.Ee = !1;
                this.Pa = void 0;
                this.Cb = [];
                qk(a, this)
            }

            function rk(a, c) {
                for (; 3 === a.Ja;) a = a.Pa;
                0 === a.Ja ? a.Cb.push(c) : (a.Ee = !0, Ga.Fe(function() {
                    var b = 1 === a.Ja ? c.gi : c.ki;
                    if (null === b)(1 === a.Ja ? Mg : Qd)(c.promise, a.Pa);
                    else {
                        try {
                            var d = b(a.Pa)
                        } catch (e) {
                            Qd(c.promise, e);
                            return
                        }
                        Mg(c.promise,
                            d)
                    }
                }))
            }

            function Mg(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof Ga) {
                            a.Ja = 3;
                            a.Pa = c;
                            Ng(a);
                            return
                        }
                        if ("function" === typeof b) {
                            qk(qr(b, c), a);
                            return
                        }
                    }
                    a.Ja = 1;
                    a.Pa = c;
                    Ng(a)
                } catch (d) {
                    Qd(a, d)
                }
            }

            function Qd(a, c) {
                a.Ja = 2;
                a.Pa = c;
                Ng(a)
            }

            function Ng(a) {
                2 === a.Ja && 0 === a.Cb.length && Ga.Fe(function() {
                    a.Ee || Ga.ug(a.Pa)
                });
                for (var c = 0, b = a.Cb.length; c < b; c++) rk(a, a.Cb[c]);
                a.Cb = null
            }

            function rr(a, c, b) {
                this.gi =
                    "function" === typeof a ? a : null;
                this.ki = "function" === typeof c ? c : null;
                this.promise = b
            }

            function qk(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Mg(c, d))
                    }, function(d) {
                        b || (b = !0, Qd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, Qd(c, d))
                }
            }

            function Hb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function sc(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function zj(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return mg(a, c, "", -100, b, d, e)
            }

            function ed(a,
                c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = sr(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    Hb: function(g, h, k) {
                        zj(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    C: function(g) {
                        return ne(a, "" + c + g + f)
                    },
                    D: function(g, h, k, l, m) {
                        mg(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function Nl(a, c, b, d) {
                var e = sk[b];
                return e ? function() {
                    var f = Da(arguments);
                    try {
                        var g = d.apply(void 0, f);
                        var h = I(a);
                        h.Ma("mt", {});
                        var k = h.C("mt"),
                            l = k[e];
                        k[e] = l ? l + 1 : 1
                    } catch (m) {
                        Ta(m)
                    }
                    return g
                } : d
            }

            function Ic(a, c) {
                var b = tr(a);
                return b ? (b.href =
                    c, {
                        protocol: b.protocol,
                        host: b.host,
                        port: b.port,
                        hostname: b.hostname,
                        hash: b.hash,
                        search: b.search,
                        query: b.search.replace(/^\?/, ""),
                        pathname: b.pathname || "/",
                        path: (b.pathname || "/") + b.search,
                        href: b.href
                    }) : {}
            }

            function tk(a) {
                return (a = S(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function ur(a, c) {
                var b = tk(a);
                uk = Wq(a, function() {
                    var d = tk(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return G(Vq, null, a, uk)
            }

            function vr(a, c, b, d) {
                var e, f, g = c.Z,
                    h = c.Ae,
                    k = c.tc,
                    l = I(a),
                    m = Ja((e = {}, e.wh = 1, e.pv = 1, e));
                d && !ia(d.isTrusted) && m.D("ite", Gb(d.isTrusted));
                be(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
                h && m.D("ut", "1");
                e = l.C("lastReferrer");
                d = S(a).href;
                k = {
                    H: (f = {}, f["page-url"] = k || d, f["page-ref"] = e, f),
                    K: m
                };
                b(k, c)["catch"](D(a, "g.s"));
                l.D("lastReferrer", d)
            }

            function wr(a, c, b) {
                function d() {
                    pa(a, h);
                    g(!1)
                }

                function e() {
                    k = !0;
                    g(!1);
                    c()
                }

                function f() {
                    pa(a, h);
                    if (k) g(!1);
                    else {
                        var Q = Math.max(0, b - (q ? r : r + l(aa) - u));
                        Q ? h = W(a, e, Q, "u.t.d.c") : e()
                    }
                }

                function g(Q) {
                    y(function(O) {
                        var ka = O[0],
                            wa = O[1];
                        O = O[2];
                        Q ? t.F(ka, wa, O) : t.Xb(ka, wa, O)
                    }, B)
                }
                var h = 0,
                    k = !1;
                if (ug(a)) return h = W(a, c, b, "u.t.d"),
                    d;
                var l = da(a),
                    m = !1,
                    p = !1,
                    q = !0,
                    r = 0,
                    u = l(aa),
                    t = ja(a),
                    B = [
                        [a, ["blur"], function() {
                            q = m = p = !0;
                            r += l(aa) - u;
                            u = l(aa);
                            f()
                        }],
                        [a, ["focus"], function() {
                            m || p || (r = 0);
                            u = l(aa);
                            m = p = !0;
                            q = !1;
                            f()
                        }],
                        [a.document, ["click", "mousemove", "keydown", "scroll"], function() {
                            p || (m = !0, q = !1, p = !0, f())
                        }]
                    ];
                g(!0);
                f();
                return d
            }

            function cf(a, c, b, d) {
                return function() {
                    if (Ha(a, c)) {
                        var e = Da(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function rb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0,
                    0
                ];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function jc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Uc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function hb(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function xa(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function vk(a) {
                a = xa(a, [0, a[0] >>>
                    1
                ]);
                a = rb(a, [4283543511, 3981806797]);
                a = xa(a, [0, a[0] >>> 1]);
                a = rb(a, [3301882366, 444984403]);
                return a = xa(a, [0, a[0] >>> 1])
            }

            function xr(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    R: [0, d],
                    T: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) &
                            255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = rb(h, Re);
                    h = Uc(h, 31);
                    h = rb(h, Se);
                    g.R = xa(g.R, h);
                    g.R = Uc(g.R, 27);
                    g.R = jc(g.R, g.T);
                    g.R = jc(rb(g.R, [0, 5]), [0, 1390208809]);
                    k = rb(k, Se);
                    k = Uc(k, 33);
                    k = rb(k, Re);
                    g.T = xa(g.T, k);
                    g.T = Uc(g.T, 31);
                    g.T = jc(g.T, g.R);
                    g.T = jc(rb(g.T, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = xa(h, hb([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = xa(h, hb([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = xa(h, hb([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = xa(h, hb([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = xa(h, hb([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = xa(h, hb([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = xa(h, [0, b.charCodeAt(f + 8)]), h = rb(h, Se), h = Uc(h, 33), h = rb(h, Re), d.T = xa(d.T, h);
                    case 8:
                        g = xa(g, hb([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = xa(g, hb([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = xa(g, hb([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = xa(g, hb([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = xa(g,
                            hb([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = xa(g, hb([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = xa(g, hb([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = xa(g, [0, b.charCodeAt(f)]), g = rb(g, Re), g = Uc(g, 31), g = rb(g, Se), d.R = xa(d.R, g)
                }
                d.R = xa(d.R, [0, b.length]);
                d.T = xa(d.T, [0, b.length]);
                d.R = jc(d.R, d.T);
                d.T = jc(d.T, d.R);
                d.R = vk(d.R);
                d.T = vk(d.T);
                d.R = jc(d.R, d.T);
                d.T = jc(d.T, d.R);
                return ("00000000" + (d.R[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.R[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) + ("00000000" +
                    (d.T[1] >>> 0).toString(16)).slice(-8)
            }

            function Rd(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = ob('[itemprop~="' + b + '"]', c);
                return d ? Z(function(e) {
                    return e.parentNode && fc("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function bb(a, c, b) {
                return (a = Rd(a, c, b)) && a.length ? a[0] : null
            }

            function Za(a) {
                if (!a) return "";
                a = ca(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Ub(a[0]) : ""
            }

            function wk(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Za(a) : ""
            }

            function md(a, c, b) {
                a = c && (Fb(c.className,
                    "ym-disable-keys") || Fb(c.className, "-metrika-nokeys"));
                return b && c ? a || !!Gq(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function Bf(a, c) {
                return Ie(c) ? "password" === c.type || c.name && L(c.name.toLowerCase(), xk) || c.id && L(c.id.toLowerCase(), xk) : !1
            }

            function yk(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                Va(a, [b >> 8, b & 255])
            }

            function Mb(a, c) {
                Va(a, [c & 255])
            }

            function eb(a, c, b) {
                return -1 !== Rb(a)(b, yr) ? (Mb(c, b), !1) : !0
            }

            function T(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) Va(a, [b & 127 | 128]), b >>= 7;
                Va(a, [b])
            }

            function Og(a,
                c) {
                T(a, c.length);
                for (var b = 0; b < c.length; b += 1) T(a, c.charCodeAt(b))
            }

            function Pg(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) yk(a, b.charCodeAt(d))
            }

            function zr(a, c) {
                var b = [];
                if (eb(a, b, 27)) return [];
                T(b, c);
                return b
            }

            function Ar(a, c) {
                var b = Ia(c);
                if (!b) return c[Xa] = -1, null;
                var d = +c[Xa];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.dj) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = Ge(a, c),
                    g = f && f[Xa] ? f[Xa] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = Br()[b];
                h || (e |= 2);
                var k = Hj(a, c);
                k || (e |= 4);
                var l = Ff(a, c);
                (f = f ? Ff(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                vc[d].wf = l[0] + "x" + l[1];
                vc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (eb(a, f, 1)) return null;
                T(f, d);
                Mb(f, e);
                T(f, g);
                h ? Mb(f, h) : Pg(f, b);
                k && T(f, k);
                e & 8 || (T(f, l[0]), T(f, l[1]), T(f, l[2]), T(f, l[3]));
                e & 32 && Pg(f, c.id);
                Mb(f, 0);
                return f
            }

            function Cr(a, c) {
                var b = c[Xa];
                if (!b || 0 > b || !Df(c) || !c.form || fi(a, c.form)) return [];
                var d = Lj(a, c.form);
                if (0 > d) return [];
                if (Ie(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        nc: 0,
                        ij: 0,
                        "datetime-local": 0,
                        email: 0,
                        tf: 0,
                        Bj: 0,
                        search: 0,
                        Ej: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Gj: 0,
                        password: 2,
                        Aj: 3,
                        fj: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        aj: 1,
                        bj: 5
                    };
                    var f = Ia(c);
                    e = V(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f) return [];
                g = [];
                if (eb(a, g, 7)) return [];
                T(g, b);
                T(g, d);
                T(g, e);
                Og(g, c.name || "");
                T(g, f);
                return g
            }

            function uc(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !En(a, c, b); c = Ge(a, c)) d.push(c);
                y(function(e) {
                    vc.counter += 1;
                    var f = vc.counter;
                    e[Xa] = f;
                    vc[f] = {};
                    f = Ar(a, e);
                    e = Cr(a, e);
                    f && e && (Va(b, f), Va(b, e))
                }, Dr(d));
                return b
            }

            function Er(a) {
                var c = a.qa;
                if (!ld || c && !c.fromElement) return ci(a)
            }

            function Fr(a) {
                var c = a.qa;
                if (c && !c.toElement) return Ef(a)
            }

            function zk(a) {
                var c = Bc(a.qa);
                if (c && me(c)) {
                    var b = bi(a, c);
                    var d = xb(a.l),
                        e = [];
                    eb(a.l, e, 17) ? a = [] : (T(e, d), T(e, c[Xa]), a = e);
                    return za(b, a)
                }
            }

            function Ak(a) {
                var c = a.l,
                    b = a.qa.target;
                if (b && me(b)) {
                    c = uc(c, b);
                    var d = xb(a.l),
                        e = [];
                    eb(a.l,
                        e, 18) ? a = [] : (T(e, d), T(e, b[Xa]), a = e);
                    return za(c, a)
                }
            }

            function Bk(a) {
                var c = a.l,
                    b = Bc(a.qa);
                if (!b || Bf(c, b) || md(c, b)) return [];
                if (Df(b)) {
                    var d = I(c).C("isEU"),
                        e = Kc(c, b, d),
                        f = e.Va;
                    d = e.sb;
                    e = e.kb;
                    if (Je(b)) var g = b.checked;
                    else g = b.value, g = f ? H("", Ck(g.split(""))) : g;
                    c = uc(c, b);
                    f = xb(a.l);
                    d = d && !e;
                    e = [];
                    eb(a.l, e, 39) ? a = [] : (T(e, f), T(e, b[Xa]), Pg(e, String(g)), Mb(e, d ? 1 : 0), a = e);
                    return za(c, a)
                }
            }

            function Te(a) {
                var c = a.l,
                    b = a.qa,
                    d = Bc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = w(e, Va);
                d && me(d) ? f(bi(a, d)) : f(uc(c, d));
                var g = aj(c, b);
                a = xb(a.l);
                f = b.type;
                var h = [g.x, g.y];
                g = b.which;
                b = b.button;
                var k;
                var l = He(c, d);
                var m = l[0];
                for (l = l[1]; d && (!m || !l);)
                    if (d = Ge(c, d)) l = He(c, d), m = l[0], l = l[1];
                d ? (m = d[Xa], !m || 0 > m ? c = [] : (l = (k = {}, k.mousemove = 2, k.click = 32, k.dblclick = 33, k.mousedown = 4, k.mouseup = 30, k.touch = 12, k)[f]) ? (k = [], d = tg(c, d), eb(c, k, l) ? c = [] : (T(k, a), T(k, m), T(k, Math.max(0, h[0] - d.left)), T(k, Math.max(0, h[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, Mb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = k)) : c = []) : c = [];
                return za(e, c)
            }

            function Gr(a) {
                var c =
                    null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Ua(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = Kc(b, c).Va || md(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = Kc(b, d).Va || md(b, d, !0), f += 1;
                if (e !== Qg) return Qg = e, d = d ? H("", Ck(e.split(""))) :
                    e, e = xb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], eb(a.l, c, 29) ? a = [] : (T(c, e), Og(c, b), Og(c, d), a = c), a
            }

            function Hr(a) {
                return za(Te(a), Gr(a) || [])
            }

            function Dk(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function Ek(a) {
                var c = [];
                Rg || (Rg = !0, Qg && c.push.apply(c, zr(a.l, xb(a.l))), Lb(a.l, function() {
                    Rg = !1
                }, "fv.c"));
                return c
            }

            function Fk(a, c, b, d) {
                c = Bc(c);
                if (!c || Gf(a, c)) return [];
                var e = Kc(a, c),
                    f = e.sb,
                    g = e.kb;
                e = e.Va;
                var h = I(a);
                if (!g && (f && h.C("isEU") || md(a, c))) a = [];
                else {
                    f = uc(a, c);
                    h = xb(a);
                    g = [];
                    if (eb(a, g, 38)) a = [];
                    else {
                        T(g, h);
                        yk(g, b);
                        Mb(g, d);
                        a = c[Xa];
                        if (!a || 0 > a) a = 0;
                        T(g, a);
                        Mb(g, e ? 1 : 0);
                        a = g
                    }
                    a = za(f, a)
                }
                return a
            }

            function Ir(a) {
                var c = a.l,
                    b = a.qa,
                    d = b.keyCode,
                    e = Dk(b),
                    f = [],
                    g = w(f, Va);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 ===
                    d && 4 === (e & -17) && (d = 144), g(Fk(c, b, d, e | 16)), Sg = !1, Lb(c, function() {
                        Sg = !0
                    }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(Ek(a));
                return f
            }

            function Jr(a) {
                var c = a.l;
                a = a.qa;
                var b = [];
                Sg && !Tg && 0 !== a.which && (b.push.apply(b, Fk(c, a, a.charCode || a.keyCode, Dk(a))), Tg = !0, Lb(c, function() {
                    Tg = !1
                }, "fv.kp"));
                return b
            }

            function Gk(a) {
                var c = a.l,
                    b = Bc(a.qa);
                if (!b || fi(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) Kj(e[f]) || d.push.apply(d, uc(c, e[f]));
                    e = d.push;
                    f = e.apply;
                    a = xb(a.l);
                    var g = Lj(c, b);
                    if (0 > g) c = [];
                    else {
                        var h = b.elements,
                            k = h.length;
                        b = [];
                        for (var l = 0; l < k; l += 1)
                            if (!Kj(h[l])) {
                                var m = h[l][Xa];
                                m && 0 < m && b.push(m)
                            }
                        h = [];
                        if (eb(c, h, 11)) c = [];
                        else {
                            T(h, a);
                            T(h, g);
                            T(h, b.length);
                            for (c = 0; c < b.length; c += 1) T(h, b[c]);
                            c = h
                        }
                    }
                    f.call(e, d, c)
                }
                return d
            }

            function Kr(a) {
                var c = a.flush;
                a = Bc(a.qa);
                "BODY" === Ia(a) && c()
            }

            function Vm(a, c) {
                var b, d = Bc(c),
                    e = ua.fc,
                    f = Pd(a);
                if (d && cc("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1;
                    f.D("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Fa(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)(e = n(a,
                        "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function wh(a, c, b, d) {
                return function() {
                    var e = Da(arguments);
                    e = d.apply(void 0, e);
                    return V(e) ? Ha(a, c) : e
                }
            }

            function vh(a, c, b, d) {
                return D(a, "cm." + b, d)
            }

            function Ll(a, c, b, d, e) {
                return b.length && e ? F(M(function(f, g, h) {
                    return b[h] ? f.concat(F([a, c, d], g)) : f
                }, [], b), v)()(e) : e
            }
            var Vc = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "eygqx1x5sixaiodx84qlgpr",
                    host: "mc.yandex.ru"
                },
                Lg = [],
                eg = /\./g,
                pk = La(String.prototype.indexOf, "indexOf"),
                oa = la(function(a, c) {
                    return a === c
                }),
                id = la(function(a, c) {
                    a(c);
                    return c
                }),
                va = la(nk),
                Ua = oa(null),
                V = oa(void 0),
                Pe = La(Array.from, "from"),
                Hk = La(Function.prototype.bind, "bind"),
                G = Hk ? function() {
                    var a = Da(arguments);
                    return Hk.apply(a[0], za([a[1]], a.slice(2)))
                } : nr,
                Rc = la(F),
                Ii = la(sa),
                Ik = La(Array.prototype.reduce, "reduce"),
                M = Ik ? function(a, c, b) {
                    return Ik.call(b, a, c)
                } : Nd,
                rj = v,
                Yf = v(P, ha),
                Ig, Hg = Rb(window),
                Lr = Bb(Hg),
                Gg = Object.prototype.hasOwnProperty,
                I = x(Pd),
                Y = Bb(n),
                Pa = Y("length"),
                Kf = Array.prototype.every ? function(a, c) {
                    return Array.prototype.every.call(c, a)
                } : function(a, c) {
                    return M(function(b, d) {
                        return b ? a(d) : !1
                    }, !0, c)
                },
                Jk = La(Array.prototype.filter, "filter"),
                Z = Jk ? function(a, c) {
                    return Jk.call(c, a)
                } : mk,
                Oa = w(Boolean, Z),
                Ug = la(Z),
                wb = Aa("find", Array.prototype.find) ? function(a, c) {
                    return Array.prototype.find.call(c, a)
                } : lr,
                L = Array.prototype.includes ? function(a, c) {
                    return Array.prototype.includes.call(c, a)
                } : kr,
                yc = Bb(L),
                Kk = La(Array.prototype.join, "join"),
                H = Kk ? function(a,
                    c) {
                    return Kk.call(c, a)
                } : jr,
                rd = la(H),
                Lk = x(function(a) {
                    a = n(a, "navigator") || {};
                    var c = n(a, "userAgent") || "";
                    return {
                        gf: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                        fg: c
                    }
                }),
                fb = x(Y("navigator.userAgent")),
                Dg = /Firefox\/([0-9]+)/i,
                Md = x(function(a) {
                    var c = n(a, "document.documentElement.style"),
                        b = n(a, "InstallTrigger");
                    a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(Dg);
                    Dg.lastIndex = 0;
                    return !(!(c && "MozAppearance" in c) || ia(b)) || a
                }),
                Od, ir = v(Eg, oa("[object Array]")),
                Mk = La(Array.prototype.map, "map"),
                A = Mk && hr(window,
                    Array.prototype.map) ? function(a, c) {
                    return c && 0 < c.length ? Mk.call(c, a) : []
                } : lk,
                y = A,
                qc = Array.prototype.flatMap ? function(a, c) {
                    return Array.prototype.flatMap.call(c, a)
                } : gr,
                gb = la(A),
                Xq = Bb(A),
                Ma = zd(function(a, c) {
                    return Array.prototype.some.call(c, a)
                }, function(a, c) {
                    for (var b = 0; b < c.length; b += 1)
                        if (b in c && a.call(c, c[b], b)) return !0;
                    return !1
                }, Aa("some", Array.prototype.some)),
                Ae = x(Rb),
                Oc = Y("0"),
                Mr = la(Fg),
                Nk = La(Array.prototype.reverse, "reverse"),
                Dr = Nk ? function(a) {
                    return Nk.call(a)
                } : fr,
                Ok = Bb(parseInt),
                Fa = Ok(10),
                Vg = Ok(2),
                Ea = Object.entries ? function(a) {
                    return a ? Object.entries(a) : []
                } : ik,
                ea = Object.keys ? Object.keys : jk,
                Nr = v(ik, w(Y("1"), lk)),
                Or = Object.values ? Object.values : Nr,
                z = Object.assign || er,
                ai = la(function(a, c) {
                    return z({}, a, c)
                }),
                fd = x(v(Y("String.fromCharCode"), w("fromCharCode", Aa), Wb)),
                Oe = x(v(fb, Ya(/ipad|iphone|ipod/i))),
                Pf = x(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                sd = x(function(a) {
                    a = Lk(a);
                    var c = a.fg;
                    return a.gf && !c.match("CriOS")
                }),
                Pr = Ya(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                Qr = Ya(/; wv\)/),
                qd = x(function(a) {
                    a = fb(a);
                    return Qr(a) || Pr(a)
                }),
                Rr = /Chrome\/(\d+)\./,
                Sr = x(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(Rr)) && a.length ? 76 <= Fa(a[1]) : !1
                }),
                pd = x(function(a) {
                    var c = (fb(a) || "").toLowerCase();
                    a = Pf(a);
                    return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
                }),
                Tr = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                Ur = x(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (V(c)) return null;
                    a = Ae(a)(c,
                        Tr);
                    return -1 === a ? c : "" + a
                }),
                ug = x(v(Y("document.addEventListener"), Wb)),
                Pk = x(function(a) {
                    var c = n(a, "navigator") || {};
                    return M(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                Ah = x(function(a) {
                    var c = n(a, "navigator") || {};
                    a = Pk(a);
                    na(a) || (a = "", c = n(c, "languages.0"), na(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                db = x(function(a) {
                    var c = !1;
                    try {
                        c = a.top !== a
                    } catch (b) {}
                    return c
                }),
                Vr = x(function(a) {
                    var c = !1;
                    try {
                        c = a.top.contentWindow
                    } catch (b) {}
                    return c
                }),
                Wr =
                x(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                Xr = x(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(Ma(w(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Ma(w(n(a, "document"), n), c) || b || d && Ma(G(d.getAttribute, d), e))
                }),
                Yr = x(function(a) {
                    return !!(Ma(w(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(fb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                Zr = x(function(a) {
                    return Kf(w(a, n), ["ia_document.shareURL", "ia_document.referrer"])
                }),
                Sd = x(function(a) {
                    var c = fb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0,
                        0
                    ];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (Oe(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && sd(a)
                }),
                dr = /Edg\/(\d+)\./,
                Ee = x(function(a) {
                    return Sd(a) || of (a, 68) || pf(a, 79)
                }),
                $r = Vc.construct,
                dc = Vc.host,
                Wg = ug(window),
                ua = {
                    pg: 24226447,
                    jg: 26302566,
                    sg: 51533966,
                    Zi: 65446441,
                    Qa: "https:",
                    fb: "1094",
                    fc: $r,
                    og: Wg ? 512 : 2048,
                    mg: Wg ? 512 : 2048,
                    ng: Wg ? 100 : 400,
                    $i: 100,
                    qg: "noindex"
                },
                Ue = [],
                N = x(function(a) {
                    return a.id + ":" + a.Z
                }),
                ic = {},
                be = oa("1"),
                as = setTimeout;
            Ga.prototype["catch"] = function(a) {
                return this.then(null,
                    a)
            };
            Ga.prototype.then = function(a, c) {
                var b = new this.constructor(pr);
                rk(this, new rr(a, c, b));
                return b
            };
            Ga.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            Ga.all = function(a) {
                return new Ga(function(c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            Ga.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === Ga ? a : new Ga(function(c) {
                    c(a)
                })
            };
            Ga.reject = function(a) {
                return new Ga(function(c, b) {
                    b(a)
                })
            };
            Ga.race = function(a) {
                return new Ga(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) Ga.resolve(a[d]).then(c, b)
                })
            };
            Ga.Fe = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                as(a, 0)
            };
            Ga.ug = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var J = window.Promise,
                bs = La(J, "Promise"),
                Qk = La(n(J, "resolve"), "resolve"),
                Rk = La(n(J, "reject"), "reject"),
                Sk = La(n(J, "all"), "all");
            if (L(!1, [bs, Qk, Rk, Sk])) J = Ga;
            else {
                var Ve = function(a) {
                    return new Promise(a)
                };
                Ve.resolve = G(Qk, J);
                Ve.reject = G(Rk,
                    J);
                Ve.all = G(Sk, J);
                J = Ve
            }
            var ub = [],
                X = [],
                Ec = [],
                ae = [],
                Xg = [],
                We = [],
                ek = yc([26812653]),
                fg = x(v(Y("id"), ek), N),
                Xb = {
                    id: "id",
                    Ae: "ut",
                    Z: "type",
                    Od: "ldc",
                    tb: "nck",
                    tc: "url",
                    eh: "referrer"
                },
                cs = /^\d+$/,
                Wc = {
                    id: function(a) {
                        a = "" + (a || "0");
                        cs.test(a) || (a = "0");
                        try {
                            var c = Fa(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    Z: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    tb: Boolean,
                    Ae: Boolean
                };
            Xb.ic = "defer";
            Wc.ic = Boolean;
            Xb.ba = "params";
            Wc.ba = function(a) {
                return ra(a) || ca(a) ? a : null
            };
            Xb.ze = "userParams";
            Xb.bg = "triggerEvent";
            Wc.bg = Boolean;
            Xb.Nf = "sendTitle";
            Wc.Nf = function(a) {
                return !!a || V(a)
            };
            Xb.ve = "trackHash";
            Wc.ve = Boolean;
            Xb.$f = "trackLinks";
            Xb.Pg = "enableAll";
            var df = M(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        ea: c[1],
                        Ua: Wc[b]
                    };
                    return a
                }, {}, Ea(Xb)),
                br = pb("debuggerEvents", wd, !0),
                Zq = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Td, mc = function(a) {
                    return function(c, b) {
                        void 0 === b && (b = !1);
                        if (Td) var d = new Td(c);
                        else Aa("Error", a.Error) ? (Td = a.Error, d = new a.Error(c)) : (Td = ar, d = new Td(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                $q = Ya(/^http./),
                Yq = Ya(/^err.kn/),
                dk = [],
                ds = x(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", C, b)
                    } catch (d) {}
                    return c
                }),
                es = la(function(a, c) {
                    return a ? z({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                ja = x(function(a) {
                    a = ds(a);
                    var c = es(a),
                        b = {};
                    return z(b, {
                        F: function(d, e, f, g) {
                            y(function(h) {
                                var k = c(g);
                                ck(d, h, f, k, !1)
                            }, e);
                            return G(b.Xb, b, d, e, f, g)
                        },
                        Xb: function(d, e, f, g) {
                            y(function(h) {
                                    var k = c(g);
                                    ck(d, h, f, k, !0)
                                },
                                e)
                        }
                    })
                }),
                da = x(gg),
                Zj = la(function(a, c) {
                    for (var b = []; !Ld(c);) {
                        var d = Tq(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                Yg = la(function(a, c) {
                    return va(function(b, d) {
                        return c(b, function(e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Xe = la(function(a, c) {
                    return va(function(b, d) {
                        return c(b, function(e) {
                            try {
                                a(e)(Ra(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                zg = [],
                Ag = !1,
                yg = !1,
                Tk = la(function(a, c) {
                    var b = c || {};
                    return {
                        l: w(b, P),
                        C: function(d, e) {
                            var f = b[d];
                            return V(f) && !V(e) ? e : f
                        },
                        D: function(d, e) {
                            b[d] = e;
                            return this
                        },
                        Ub: function(d, e) {
                            return "" ===
                                e || ia(e) ? this : this.D(d, e)
                        },
                        Ca: w(b, a)
                    }
                }),
                Ja = Tk(function(a) {
                    var c = "";
                    a = M(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], Ea(a));
                    c && a.push(c);
                    return H(":", a)
                }),
                Zg, Qj = (Zg = {}, Zg.w = [
                    [function(a, c) {
                            return {
                                M: function(b, d) {
                                    var e, f = b.H;
                                    f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                    "0" !== c.Z && (f["cnt-class"] = c.Z);
                                    b.K || (b.K = Ja());
                                    e = b.K;
                                    var g = b.aa;
                                    f = {
                                        ga: {
                                            Ba: "watch/" + c.id
                                        },
                                        aa: z(void 0 === g ? {} : g, {
                                            Bb: !(!e.C("pv") || e.C("ar") || e.C("wh"))
                                        }),
                                        H: z(b.H || {}, f)
                                    };
                                    z(b, f);
                                    d()
                                }
                            }
                        },
                        1
                    ]
                ], Zg),
                Xc = w(Qj, Uj),
                ib = Kd("w"),
                Pj = ["webkitvisibilitychange", "visibilitychange"],
                wg = Tk(function(a) {
                    a = Ea(a);
                    return H("", A(function(c) {
                        var b = c[0];
                        c = c[1];
                        return Ua(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                Uk = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                Up = /^ *(data|javascript):/i,
                dj = new RegExp(H("", ["\\.(" + H("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Qa, sk = (Qa = {}, Qa.hit = "h", Qa.params = "p", Qa.reachGoal = "g", Qa.userParams = "up",
                    Qa.trackHash = "th", Qa.accurateTrackBounce = "atb", Qa.notBounce = "nb", Qa.addFileExtension = "fe", Qa.extLink = "el", Qa.file = "fc", Qa.trackLinks = "tl", Qa.destruct = "d", Qa.setUserID = "ui", Qa.getClientID = "ci", Qa.clickmap = "cm", Qa.enableAll = "ea", Qa),
                fs = x(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                gs = v(N, fs, ha),
                kg = {
                    mc: function(a) {
                        a = Pd(a).C("mt", {});
                        a = Ea(a);
                        return a.length ? M(function(c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function(a) {
                        var c = I(a).C("cls", {
                                ec: 0,
                                x: 0,
                                y: 0
                            }),
                            b = c.ec,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function(a, c, b) {
                        a = b.H;
                        return !a || a.nohit ? null : gs(c)
                    }
                },
                Ib = F([1, null], zd),
                Gb = F([1, 0], zd),
                Lq = x(function(a) {
                    Nj(a, "_ymBRC", "1");
                    var c = "1" !== Mj(a, "_ymBRC");
                    c || Oj(a, "_ymBRC");
                    return c
                }),
                Na = x(rf),
                Yc = x(rf, function(a, c, b) {
                    return "" + c + b
                }),
                hs = x(Y("document.documentElement")),
                is = x(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                ab = x(v(Y("document"), w("createElement", gc))),
                gi = x(function(a) {
                    var c =
                        n(a, "Element.prototype");
                    return c ? (a = wb(function(b) {
                        return Aa(b, c[b])
                    }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                js = oa("INPUT"),
                Ie = v(Ia, js),
                ks = oa("TEXTAREA"),
                Iq = v(Ia, ks),
                ls = oa("SELECT"),
                Jq = v(Ia, ls),
                Je = v(Y("type"), Ya(/^(checkbox|radio)$/)),
                Df = v(Ia, Ya(/^INPUT|SELECT|TEXTAREA$/)),
                me = v(Ia, Ya(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Hf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                Hq = ["submit", "image", "hidden"],
                tj = /^\s+|\s+$/g,
                Ij = La(String.prototype.trim, "trim"),
                Vk = la(function(a, c) {
                    return c.replace(a, "")
                }),
                Mi = Vk(/\s/g),
                Pb = Vk(/\D/g),
                Tf = x(function() {
                    for (var a = 59, c = {}, b = 0; b < Uk.length; b += 1) c[Uk[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                Gj = x(function(a) {
                    return {
                        lj: a,
                        lb: null,
                        ub: []
                    }
                }),
                Ej = {},
                rg = {};
            Ej.p = 500;
            var Dj = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            rg.h = !0;
            rg.c = !0;
            var Sc = {};
            Sc.p = sg;
            Sc.c = function(a, c, b) {
                (a = nb(n(c, "textContent"))) && b && (b = b(c), b.length && Ma(v(Y("textContent"), nb, oa(a)), b) && (a = ""));
                Ie(c) && (a = nb(c.getAttribute && c.getAttribute("value") ||
                    a));
                return a
            };
            var Zc, qg = "button," + A(function(a) {
                    return 'input[type="' + a + '"]'
                }, ["button", "submit", "reset", "file"]).join(",") + ",a",
                Vf = w(qg, ob),
                Eq = (Zc = {}, Zc.A = "h", Zc.BUTTON = "i", Zc.DIV = "i", Zc.INPUT = "ty", Zc),
                Dq = "hash host hostname href pathname port protocol search".split(" "),
                pg = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "),
                Cj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                ye = x(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                ms =
                x(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Cj));
                    return c
                }),
                Wk = v(S, Y("protocol"), oa("https:")),
                Xk = /\/$/,
                ns = x(v(da, va(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                os = v(da, va(function(a) {
                    a = new a.l.Date;
                    return H("", A(Uq, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                ps = v(da, va(lg)),
                Yk = x(v(da, va(function(a) {
                    return a.Aa[0]
                }))),
                qs = x(Cc),
                Bq = x(function(a) {
                    return Sr(a) && Wk(a) ? "SameSite=None;Secure;" : ""
                }),
                og = ["metrika_enabled"],
                ng = [],
                Aj = pb("gsc", yj),
                Cq = /:\d+$/,
                sr = x(function(a) {
                    var c = (S(a).host || "").split(".");
                    return 1 === c.length ? c[0] : M(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = H(".", c.slice(-e)), hi(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                Nb = x(ed),
                xj = pb("r", function(a, c) {
                    var b = wj(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Hd = x(function() {
                    return {
                        Ga: {},
                        pending: {},
                        children: {}
                    }
                }),
                $g = Y("postMessage"),
                rs = E("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = Hd(a),
                        g = H(":", [c.meta.nc, c.meta.key]);
                    if ($g(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.Vf, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        W(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                ss = E("s.fh", function(a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k = Hd(a),
                        l = null;
                    try {
                        g = Hb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!ia(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ia(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !ca(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!Ua(k) && $g(k) && (f = d.O(l.type, [f, l]), e = A(v(P, ai(e)), f.concat([{}])), l = b([c, a, l.counterId], e),
                                    k.postMessage(l.Vf, "*"))
                            }
                        } else g === "" + h && ca(l) && Z(function(m) {
                            return !(!m.hid || !m.counterId)
                        }, l).length === l.length && (b = k.pending[H(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                gd = x(function(a, c) {
                    var b, d = gc("getElementsByTagName", n(a, "document")),
                        e = Hd(a),
                        f = $g(a),
                        g = jd(a),
                        h = ja(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + xc(a), b);
                    Ee(a) && (f.duid = Id(a, c));
                    xq(a, g);
                    yq(a);
                    b = zq(a, f);
                    var k = F([a, w([], b)], rs);
                    y(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m &&
                            k(m, {
                                type: "initToChild"
                            }, function(p, q) {
                                g.O("initToParent", [p, q])
                            })
                    }, d);
                    db(a) && k(a.parent, {
                        type: "initToParent"
                    }, function(l, m) {
                        g.O("parentConnect", [l, m])
                    });
                    h.F(a, ["message"], F([a, c, b, g, f], ss));
                    return {
                        $: g,
                        Ga: e.Ga,
                        children: e.children,
                        ke: k
                    }
                }, v(qb, N)),
                hd = x(function(a, c) {
                    if (!Ee(a) || !db(a)) return Id(a, c);
                    var b = gd(a, c);
                    return b && b.Ga[c.id] ? b.Ga[c.id].info.duid || Id(a, c) : Id(a, c)
                }, function(a, c) {
                    return "{" + c.Od + c.tb
                }),
                ts = x(function(a) {
                    a = I(a);
                    var c = a.C("counterNum", 0) + 1;
                    a.D("counterNum", c);
                    return c
                }, v(qb, N)),
                ma,
                Fe = (ma = {}, ma.vf = w(Vc.version, P), ma.nt = Ur, ma.fp = function(a, c, b) {
                    if (b.H && b.H.nohit) return null;
                    c = N(c);
                    b = qs(a);
                    if (b[c]) return null;
                    a: {
                        var d = Yk(a),
                            e = n(a, "performance.getEntriesByType");
                        if (U(e)) {
                            if (a = Z(v(P, Y("name"), oa("first-contentful-paint")), e.call(a.performance, "paint")), a.length) {
                                a = a[0].startTime;
                                break a
                            }
                        } else {
                            e = n(a, "chrome.loadTimes");
                            if (U(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                                a = 1E3 * e - d;
                                break a
                            }
                            if (a = n(a, "performance.timing.msFirstPaint")) {
                                a -= d;
                                break a
                            }
                        }
                        a = void 0
                    }
                    return a ? (b[c] = a,
                        Math.round(a)) : null
                }, ma.fu = function(a, c, b) {
                    var d = b.H;
                    if (!d) return null;
                    c = (n(a, "document.referrer") || "").replace(Xk, "");
                    b = (d["page-ref"] || "").replace(Xk, "");
                    d = d["page-url"];
                    a = S(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                }, ma.en = is, ma.la = Pk, ma.ut = function(a, c, b) {
                    var d = b.V;
                    b = b.H;
                    d = d && d.Fc;
                    b && (ms(a) || c.Ae || d) && (b.ut = ua.qg);
                    return null
                }, ma.v = w(ua.fb, P), ma.cn = ts, ma.dp = function(a) {
                    var c = I(a),
                        b = c.C("bt", {});
                    if (V(c.C("bt"))) {
                        var d = n(a, "navigator.getBattery");
                        try {
                            b.p = d && d.call(a.navigator)
                        } catch (e) {}
                        c.D("bt",
                            b);
                        b.p && b.p.then && b.p.then(D(a, "bi:dp.p", function(e) {
                            b.Si = n(e, "charging") && 0 === n(e, "chargingTime")
                        }))
                    }
                    return Gb(b.Si)
                }, ma.ls = x(function(a, c) {
                    var b = Yc(a, c.id),
                        d = da(a),
                        e = b.C("lsid");
                    return +e ? e : (d = Wa(a, 0, d(aa)), b.D("lsid", d), d)
                }, qb), ma.hid = xc, ma.phid = function(a, c) {
                    if (!db(a)) return null;
                    var b = gd(a, c);
                    if (!b) return null;
                    var d = ea(b.Ga);
                    return d.length ? b.Ga[d[0]].info.hid : null
                }, ma.z = ns, ma.i = os, ma.et = ps, ma.c = v(Y("navigator.cookieEnabled"), Ib), ma.rn = v(P, Wa), ma.rqn = function(a, c, b) {
                    b = b.H;
                    if (!b || b.nohit) return null;
                    c = N(c);
                    a = Yc(a, c);
                    c = (a.C("reqNum", 0) || 0) + 1;
                    a.D("reqNum", c);
                    if (a.C("reqNum") === c) return c;
                    a.Hb("reqNum");
                    return null
                }, ma.u = hd, ma.w = function(a) {
                    a = Tc(a);
                    return a[0] + "x" + a[1]
                }, ma.s = function(a) {
                    var c = n(a, "screen");
                    if (c) {
                        a = n(c, "width");
                        var b = n(c, "height");
                        c = n(c, "colorDepth") || n(c, "pixelDepth");
                        return H("x", [a, b, c])
                    }
                    return null
                }, ma.sk = Y("devicePixelRatio"), ma.ifr = v(db, Ib), ma.j = v(Wr, Ib), ma.sti = function(a) {
                    return db(a) ? Vr(a) ? "1" : null : null
                }, ma),
                wq = x(function() {
                    return Va(ea(Fe), ea(kg))
                }),
                vq = x(Cc, N),
                uj = x(function() {
                    return {
                        Re: null,
                        va: []
                    }
                }, N),
                sq = /^[a-z][\w.+-]+:/i,
                ah, Tb = [
                    [Le, 1],
                    [De, 2],
                    [Kb(), 3],
                    [vj, 4]
                ],
                jg = [],
                Cb = w(Tb, Vj),
                Sb = (ah = {}, ah.h = Tb, ah),
                ba = w(Sb, Uj);
            Cb(function(a) {
                return {
                    M: function(c, b) {
                        var d = c.H;
                        if (!c.K || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = sj(a, e) : delete d["page-ref"];
                        d["page-url"] = sj(a, f).slice(0, ua.og);
                        return b()
                    }
                }
            }, -100);
            var oq = /[^a-z0-9.:-]/,
                bh, ch = {},
                Zk = Oa([hg && [hg, 0], zb && [zb, 1],
                    [Ab, 2], Fd && [Fd, 3],
                    [Qc, 4]
                ]),
                kc = Oa([hg, zb, Ab, Fd, Qc]),
                dh = [Ab];
            dh.unshift(zb);
            dh.push(Fd);
            var $k = Oa(dh),
                $c =
                Oa([Qc]);
            Oa([zb, Ab]);
            var us = Oa([zb, Qc]),
                al = Oa([zb, Ab, Fd, Qc]),
                ya = (bh = {}, bh.h = $k, bh),
                eh = x(function(a, c) {
                    var b = ch["*"] ? ch["*"] : c && ch[c];
                    b || (b = c ? ya[c] || [] : kc);
                    b = M(function(d, e) {
                        var f = e(a);
                        if (f) {
                            var g = wb(v(Oc, oa(e)), Zk);
                            g && d.push([g[1], f])
                        }
                        return d
                    }, [], b);
                    b.length || $d();
                    return b
                }, qb),
                fh, vs = G(J.reject, J, Sa()),
                Ca = (fh = {}, fh.h = ib, fh),
                ta = E("g.sen", function(a, c, b) {
                    var d = eh(a, c);
                    b = b ? rq(a, c, b) : [];
                    var e = Ca[c],
                        f = e ? e(a, d, b) : ib(a, d, b);
                    return function() {
                        var g = Da(arguments),
                            h = g[0];
                        g = g.slice(1);
                        var k = h.aa;
                        h = z(h, {
                            aa: z(void 0 ===
                                k ? {} : k, {
                                    ha: [c]
                                })
                        });
                        return f.apply(void 0, za([h], g))
                    }
                }, vs),
                gq = la(function(a, c) {
                    if (!c[a]) {
                        var b, d = new J(function(e) {
                            b = e
                        });
                        c[a] = {
                            Ef: b,
                            promise: d,
                            Ff: !1
                        }
                    }
                    return c[a].promise
                }),
                oj = x(v(Cc, va)),
                Ud = x(function(a, c) {
                    var b = n(a, "console"),
                        d = n(b, "log");
                    d = Qe("log", d) ? G(d, b) : C;
                    var e = n(b, "warn");
                    e = Qe("warn", e) ? G(e, b) : d;
                    var f = n(b, "error");
                    b = Qe("error", f) ? G(f, b) : d;
                    return {
                        log: Pc(a, "log", c, d),
                        error: Pc(a, "error", c, b),
                        warn: Pc(a, "warn", c, e)
                    }
                }),
                ws = E("dc.init", function(a, c) {
                    function b(k) {
                        for (var l = [], m = 1; m < arguments.length; m++) l[m -
                            1] = arguments[m];
                        I(a).C("dce:" + c, !1) && e[k].apply(e, l);
                        I(a).C("dclq:" + c).push([k, l])
                    }
                    var d = S(a),
                        e = Ud(a, c);
                    I(a).Ma("dclq:" + c, []);
                    var f = Nb(a),
                        g = Jf(a),
                        h = g.Nh;
                    g = g.Dh;
                    h && !g && f.D("debug", "1", void 0, d.host);
                    return h || g ? {
                        log: w("log", b),
                        warn: w("warn", b),
                        error: w("error", b)
                    } : fq(a, c)
                }),
                Dd = x(ws, qb),
                xs = E("p.dc", function(a, c) {
                    var b = N(c);
                    nj(a, "");
                    nj(a, b)
                }),
                Ol = D(window, "h.p", function(a, c) {
                    var b, d, e = ta(a, "h", c),
                        f = c.tc || "" + S(a).href,
                        g = c.eh || a.document.referrer,
                        h = {
                            K: Ja((b = {}, b.pv = 1, b)),
                            H: (d = {}, d["page-url"] = f, d["page-ref"] =
                                g, d),
                            V: {}
                        };
                    h.V.ba = c.ba;
                    h.V.ze = c.ze;
                    c.ic && h.H && (h.H.nohit = "1");
                    return e(h, c).then(function(k) {
                        k && (c.ic || Jb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.ba)(), Lb(a, F([a, c, k], hq)))
                    })["catch"](D(a, "h.g.s"))
                }),
                gh = ["yandex_metrika_callback" + Vc.callbackPostfix, "yandex_metrika_callbacks" + Vc.callbackPostfix],
                ys = E("cb.i", function(a) {
                    var c = gh[0],
                        b = gh[1];
                    if (U(a[c])) a[c]();
                    "object" === typeof a[b] && y(function(d, e) {
                        a[b][e] = null;
                        bg(a, d)
                    }, a[b]);
                    y(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, gh)
                }),
                bl = x(function(a) {
                    return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a, "FileReader") && n(a, "Blob")
                }),
                zs = E("fpm", function(a, c) {
                    if (!Wk(a)) return C;
                    var b = N(c);
                    if (!bl(a)) return vb(a, b, "Not supported"), C;
                    var d = Ha(a, c);
                    return d ? function(e) {
                        return (new J(function(f, g) {
                            return ra(e) ? ea(e).length ? f(kj(a, e).then(function(h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, C)) : g(Sa("fpm.l")) : g(Sa("fpm.o"))
                        }))["catch"](D(a, "fpm.en"))
                    } : C
                }),
                Ye = la(function(a, c) {
                    var b = {};
                    dg(a)(function(d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                As = E("c.c.cc", function(a) {
                    var c = I(a),
                        b = v(Ye(a), function(d) {
                            var e, f = (e = {}, e.clickmap = !!d.clickmap, e);
                            return z({}, d, f)
                        });
                    return D(a, "g.c.cc", v(G(c.C, c, "counters", {}), ea, gb(b)))
                }),
                Bs = E("gt.c.rs", function(a, c) {
                    var b, d = N(c),
                        e = c.id,
                        f = c.Z,
                        g = c.Hg,
                        h = c.ve,
                        k = F([a, d], bq);
                    cg(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                ij = x(wd),
                Cd = x(Cc, N),
                Cs = E("pa.int", function(a, c) {
                    var b;
                    return b = {}, b.params = function() {
                        var d, e, f = Da(arguments),
                            g = aq(f);
                        if (!g) return null;
                        f = g.Lg;
                        var h = g.ba;
                        g = g.ac;
                        if (!ra(h) && !ca(h)) return null;
                        var k = ta(a, "1", c),
                            l = Cd(c).url,
                            m = !fg(c),
                            p = "arams. Counter " + c.id,
                            q = "P" + p,
                            r = h,
                            u = "";
                        (u = n(h, "__ym.user_id")) && (q = "Set user id " + u);
                        L("__ymu", ea(h)) && (q = "User p" + p);
                        r.__ym && (r = z({}, h), r.__ym = M(function(t, B) {
                            var Q = n(h, "__ym." + B);
                            Q && (t[B] = Q);
                            return t
                        }, {}, Ue), ea(r.__ym).length || delete r.__ym, m = !!ea(r).length);
                        r = u ? void 0 : JSON.stringify(r);
                        p = Jb(a, c, q, r);
                        k = k({
                            V: {
                                ba: h
                            },
                            K: Ja((d = {}, d.pa = 1, d.ar = 1, d)),
                            H: (e = {}, e["page-url"] = l || S(a).href, e)
                        }, c).then(m ? p : C);
                        return Nc(a, "p.s", k, g,
                            f)
                    }, b
                }),
                he = x(fj, v(qb, N)),
                Ds = E("y.p", function(a, c) {
                    var b = fj(a, c);
                    if (b) {
                        var d = ce(a),
                            e = F([a, b, c], Xp);
                        Dh(a, d, function(f) {
                            f.F(["params"], e)
                        });
                        b.$.F(["params"], v(Y("1"), e))
                    }
                }),
                tr = x(function(a) {
                    if (a = ab(a)) return a("a")
                }),
                cl = {
                    pj: Ya(/[/&=?#]/)
                },
                ve = E("go.in", function(a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal = function(f, g, h, k) {
                        var l, m;
                        if (!f || cl[b] && cl[b](f)) return null;
                        var p = g,
                            q = h || C;
                        U(g) && (q = g, p = void 0, k = h);
                        var r = Jb(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + f, p),
                            u = "goal" === b;
                        g = ta(a,
                            "g", c);
                        var t = Wp(a, c, f, b);
                        h = t[0];
                        t = t[1];
                        p = g({
                            V: {
                                ba: p
                            },
                            K: Ja((l = {}, l.ar = 1, l)),
                            H: (m = {}, m["page-url"] = h, m["page-ref"] = t, m)
                        }, c).then(function() {
                            var B, Q;
                            u && r();
                            mb(a, (B = {}, B.counterKey = N(c), B.name = "event", B.data = (Q = {}, Q.schema = b, Q.name = f, Q), B));
                            d && d()
                        });
                        return Nc(a, "g.s", p, q, k)
                    }, e
                }),
                Es = E("guid.int", function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = Id(a, c);
                        d && bg(a, d, null, e);
                        return e
                    }, b
                }),
                uk, Fs = E("th.e", function(a, c) {
                    function b() {
                        g || (k = Ad(a, "onhashchange") ? ja(a).F(a, ["hashchange"], h) : ur(a, h))
                    }
                    var d, e = ta(a, "t", c),
                        f = Be(a, N(c)),
                        g = !1,
                        h = D(a, "h.h.ch", G(vr, null, a, c, e)),
                        k = C;
                    c.ve && (b(), g = !0);
                    e = D(a, "tr.hs.h", function(l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                Gs = la(function(a, c) {
                    na(c) ? a.push(c) : y(v(P, sa("push", a)), c)
                }),
                Hs = E("cl.p", function(a, c) {
                    function b(p, q, r, u) {
                        void 0 === u && (u = {});
                        r ? xe(a, c, {
                            url: r,
                            qb: !0,
                            Bc: p,
                            Fc: q,
                            sender: e,
                            gg: u
                        }) : g.warn("Empty link")
                    }
                    var d, e = ta(a, "2", c),
                        f = [],
                        g = Ud(a, N(c)),
                        h = N(c),
                        k = D(a, "s.s.tr", w(Be(a, h), Vp));
                    h = {
                        l: a,
                        gb: c,
                        Wg: f,
                        sender: e,
                        oj: I(a),
                        Kg: Yc(a, c.id),
                        qj: xc(a),
                        Li: w(w(h, Ye(a)), v(ha, Y("trackLinks")))
                    };
                    h = D(a, "cl.p.c", w(h, Sp));
                    h = ja(a).F(a, ["click"], h);
                    c.$f && k(c.$f);
                    var l = D(a, "file.clc", F([!0, !1], b)),
                        m = D(a, "e.l.l.clc", F([!1, !0], b));
                    f = D(a, "add.f.e.clc", Gs(f));
                    return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = h, d
                }),
                Bd = pb("retryReqs", function(a) {
                    var c = Na(a),
                        b = c.C("retryReqs", {}),
                        d = da(a)(aa);
                    y(function(e) {
                        var f = e[0];
                        e = e[1];
                        (!e || !e.time || e.time + 864E5 < d) && delete b[f]
                    }, Ea(b));
                    c.D("retryReqs", b);
                    return b
                }, !0),
                hh =
                Bb(v(le, oa(0))),
                Is = [hh("watch"), hh("clmap")],
                Js = E("g.r", function(a) {
                    var c = da(a),
                        b = Bd(a),
                        d = c(aa),
                        e = xc(a);
                    return M(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && Ma(va(k.resource), Is) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                            protocol: k.protocol,
                            host: k.host,
                            Ba: k.resource,
                            ri: k.postParams,
                            ba: k.params,
                            yg: k.browserInfo,
                            nj: k.ghid,
                            time: k.time,
                            Rb: Fa(h),
                            Jg: k.counterId,
                            Z: k.counterType
                        }, k.telemetry && (h.Ha = k.telemetry), f.push(h));
                        return f
                    }, [], Ea(b))
                }),
                Ks = E("nb.p", function(a,
                    c) {
                    function b(B) {
                        l() || (B = "number" === typeof B ? B : 15E3, t = wr(a, d(!1), B), m())
                    }

                    function d(B) {
                        return function(Q) {
                            var O, ka, wa;
                            void 0 === Q && (Q = (O = {}, O.ctx = {}, O.callback = C, O));
                            if (B || !r && !k.Hd) {
                                r = !0;
                                m();
                                t && t();
                                var yb = p(aa);
                                O = (Fa(k.C("lastHit")) || 0) < yb - 18E5;
                                var vd = .1 > Math.random();
                                k.D("lastHit", yb);
                                yb = Ja((ka = {}, ka.nb = 1, ka.cl = u, ka.ar = 1, ka));
                                ka = Cd(c);
                                ka = {
                                    H: (wa = {}, wa["page-url"] = ka.url || S(a).href, wa),
                                    K: yb,
                                    V: {
                                        force: B
                                    }
                                };
                                wa = Ud(a, N(c)).warn;
                                !Q.callback && Q.ctx && wa('"callback" argument missing');
                                (wa = B || O || vd) || (wa = a.location.href,
                                    O = a.document.referrer, wa = !(wa && O ? ej(wa) === ej(O) : !wa && !O));
                                if (wa) return wa = g(ka, c), Nc(a, "l.o.l", wa, Q.callback, Q.ctx)
                            }
                            return null
                        }
                    }
                    var e, f, g = ta(a, "n", c),
                        h = N(c),
                        k = Yc(a, c.id),
                        l = w(w(h, Ye(a)), v(ha, Y("accurateTrackBounce"))),
                        m = w((e = {}, e.accurateTrackBounce = !0, e), Be(a, h)),
                        p = da(a),
                        q = p(aa),
                        r = !1,
                        u = 0,
                        t;
                    qa(c, function(B) {
                        u = B.Yg - q
                    });
                    c.Ge && b(c.Ge);
                    e = (f = {}, f.notBounce = d(!0), f.u = t, f);
                    e.accurateTrackBounce = b;
                    return e
                }),
                Pp = la(cc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                Ls = E("clm.p", function(a, c) {
                    if (fd(a)) return C;
                    var b = ta(a, "m", c),
                        d = N(c),
                        e = da(a),
                        f = e(aa),
                        g = w(w(d, Ye(a)), v(ha, Y("clickmap"))),
                        h, k = null;
                    d = D(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var p = I(a),
                                q = p.C("cls", {
                                    ec: 0,
                                    x: 0,
                                    y: 0
                                });
                            p.D("cls", {
                                ec: q.ec + 1,
                                x: q.x + l.clientX,
                                y: q.y + l.clientY
                            });
                            p = "object" === typeof m ? m : {};
                            q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = A(function(t) {
                                return ("" + t).toUpperCase()
                            }, p.ignoreTags || []);
                            V(h) && (h = p.quota || null);
                            var u = !!p.quota;
                            l = {
                                element: Qp(a, l),
                                position: aj(a, l),
                                button: Rp(l),
                                time: e(aa)
                            };
                            p = S(a).href;
                            if (Op(a, l, k, r, q)) {
                                if (u) {
                                    if (!h) return;
                                    --h
                                }
                                r =
                                    He(a, l.element);
                                q = r[0];
                                r = r[1];
                                u = tg(a, l.element);
                                q = ["rn", Wa(a), "x", Math.floor(65535 * (l.position.x - u.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - u.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", sg(a, l.element), "X", l.position.x, "Y", l.position.y];
                                q = H(":", q);
                                m && (q += ":wh:1");
                                Np(a, p, q, b, c);
                                k = l
                            }
                        }
                    });
                    return ja(a).F(n(a, "document"), ["click"], d)
                }),
                Ms = E("trigger.in", function(a, c) {
                    c.bg && Lb(a, F([a, "yacounter" + c.id + "inited"], Kq), "t.i")
                }),
                Ns = E("c.m.p", function(a, c) {
                    var b, d = N(c);
                    return b = {}, b.clickmap = w(Be(a,
                        d), Mp), b
                }),
                Bi = w("form", fc),
                wp = w("form", ob),
                Lp = x(v(qb, Bb(qa)(Y("settings.form_goals"))), qb),
                Os = E("s.f.i", function(a, c) {
                    var b = [];
                    ja(a).F(a, ["click"], D(a, "s.f.c", F([a, c, b], Kp)));
                    ja(a).F(a, ["submit"], D(a, "s.f.e", function(d) {
                        d = [n(d, "target"), n(d, "isTrusted")];
                        Yi(!0, a, c, b, d[0], d[1])
                    }));
                    Zi(a, c, "Form goal. Counter " + c.id + ". Init.")
                }),
                Ps = E("s.f.i", function(a, c) {
                    return qa(c, function(b) {
                        if (n(b, "settings.button_goals")) return b = ja(a).F(a, ["click"], D(a, "c.t.c", v(F([a, c], cf(a, c, "", Jp))))), Jb(a, c, "Button goal. Counter " +
                            c.id + ". Init.")(), b
                    })
                }),
                Yb, Vd, ih, Dc, Zf = (Yb = {}, Yb.transaction_id = "id", Yb.item_brand = "brand", Yb.index = "position", Yb.item_variant = "variant", Yb.value = "revenue", Yb.item_category = "category", Yb.item_list_name = "list", Yb),
                ec = (Vd = {}, Vd.item_id = "id", Vd.item_name = "name", Vd.promotion_name = "coupon", Vd),
                Ip = (ih = {}, ih.promotion_name = "name", ih),
                Xi = "currencyCode add delete remove purchase checkout detail".split(" "),
                yd = (Dc = {}, Dc.view_item = {
                        event: "detail",
                        ya: ec,
                        Ia: "products"
                    }, Dc.add_to_cart = {
                        event: "add",
                        ya: ec,
                        Ia: "products"
                    },
                    Dc.remove_from_cart = {
                        event: "remove",
                        ya: ec,
                        Ia: "products"
                    }, Dc.begin_checkout = {
                        event: "checkout",
                        ya: ec,
                        Ia: "products"
                    }, Dc.purchase = {
                        event: "purchase",
                        ya: ec,
                        Ia: "products"
                    }, Dc),
                Wi = E("dl.w", function(a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = ca(g) && ze(a, g, b)) || (f = W(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function() {
                        return pa(a, f)
                    }
                }),
                Qs = E("p.e", function(a, c) {
                    var b = Ha(a, c);
                    if (b) {
                        var d = I(a);
                        b = b.params;
                        var e = D(a, "h.ee", F([a, N(c), b], Fp));
                        return c.od ? (d.D("ecs", 0), Vi(a, c.od, e)) : qa(c, function(f) {
                            if ((f = n(f, "settings.ecommerce")) &&
                                na(f)) return d.D("ecs", 1), Vi(a, f, e)
                        })
                    }
                }),
                Si = x(function(a) {
                    return H("[^\\d<>]*", a.split(""))
                }),
                Lm = x(function(a) {
                    return new RegExp(Si(a), "g")
                }),
                Cp = /\S/,
                Li = w(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], Gc),
                dl = x(function(a) {
                    return fd(a) || !Jd(a)
                }),
                Rs = E("phc.h", function(a, c) {
                    if (!hk(a) && !dl(a)) return qa(c, function(b) {
                        if (!n(b, "settings.phchange")) {
                            var d = Na(a),
                                e = Fb(S(a).search, "_ym_hide_phones=1") || d.C("_ym_hide_phones", 0);
                            b = n(b, "settings.phhide");
                            e && !b &&
                                (b = ["*"], d.D("_ym_hide_phones", 1));
                            b && Di(a, c, b)
                        }
                    })["catch"](D(a, "phc.hs"))
                }),
                el = x(function(a) {
                    a = S(a);
                    a = Oq(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }),
                Gi = v(el, Y("_ym_status-check"), Fa),
                Ss = v(el, Y("_ym_lang")),
                Fi = Ya(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                yp = ["form", "button", "phone", "status"],
                jh = [],
                vp =
                x(function(a, c, b) {
                    y(v(Rc([a, c, b]), ha), jh);
                    if (b.inline) {
                        c = Ei(b);
                        var d = b.data;
                        b = b.id;
                        Ai(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                    } else b.resource && Fi(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, zp(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                Ts = E("cs.init", function(a, c) {
                    var b, d = Gi(a);
                    if (d && c.id === d && "0" === c.Z) {
                        var e = Ei((b = {}, b.lang = Ss(a), b.fileId = "status", b));
                        W(a, F([a, e, "" + d], Ai), 0, "cs")
                    }
                }),
                Us = E("suid.int", function(a, c) {
                    var b;
                    return b = {}, b.setUserID =
                        function(d, e, f) {
                            if (na(d) || se(a, d)) {
                                var g = Ha(a, c);
                                d = Gc(["__ym", "user_id", d]);
                                g.params(d, e || C, f)
                            } else Ud(a, N(c)).error("Incorrect user ID")
                        }, b
                }),
                Lc = {
                    position: "absolute"
                },
                zi = {
                    position: "fixed"
                },
                Sf = {
                    borderRadius: "50%"
                },
                Vs = pb("siteStatistics", function(a, c) {
                    if (!hk(a)) return Qb(a)(Ra(C, F([c, v(Y("settings.sm"), oa(1), F([F([a, c.id], tp), C], zd), ha)], qa)))
                }),
                Ws = E("up.int", function(a, c) {
                    var b;
                    return b = {}, b.userParams = D(a, "up.c", function(d, e, f) {
                        var g, h = Ha(a, c),
                            k = Dd(a, N(c)).warn;
                        h ? ra(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) &&
                            g(d, e || C, f)) : k("Wrong user params") : k("No counter instance found")
                    }), b
                }),
                Xs = /[\*\.\?\(\)]/g,
                Ys = x(function(a, c, b) {
                    try {
                        var d = b.replace("\\s", " ").replace(Xs, "");
                        Dd(a, "").warn('Function "' + d + '" has been overridden, this may cause issues with Metrika counter')
                    } catch (e) {}
                }, qb),
                Zs = E("r.nn", function(a) {
                    Jf(a).isEnabled && ze(a, Lg, function(c) {
                        c.za.F(function(b) {
                            Ys(a, b[1], b[0]);
                            Lg.splice(100)
                        })
                    })
                }),
                $s = E("e.a.p", function(a, c) {
                    var b, d = Ha(a, c);
                    d = F([v(P, va(!0)), Z(Boolean, A(w(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))],
                        A);
                    c.Pg && d();
                    return b = {}, b.enableAll = d, b
                }),
                at = w("add", re),
                bt = w("remove", re),
                ct = w("detail", re),
                dt = w("purchase", re),
                et = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                gf = x(function(a) {
                    var c = Lk(a);
                    a = c.fg;
                    if (!c.gf) return !1;
                    c = sa("indexOf", a);
                    c = Ma(v(c, oa(-1), Wb), et);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) && e
                }),
                ft = ["YangoEats"],
                lm = x(function(a) {
                    var c =
                        fb(a);
                    if (!c) return !1;
                    c = sa("indexOf", c);
                    return Ma(v(c, oa(-1), Wb), ft) || qd(a)
                }),
                rp = /([0-9\\.]+) Safari/,
                gt = /\sYptp\/\d\.(\d+)\s/,
                fl = x(function(a) {
                    var c;
                    a: {
                        if ((c = fb(a)) && (c = gt.exec(c)) && 1 < c.length) {
                            c = Fa(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || pf(a, 79) ? !1 : !Sd(a) || gf(a)
                }),
                gl = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                ht = x(function(a) {
                    a = ab(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = G(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                hl = La(String.prototype.repeat, "repeat"),
                it = hl ? function(a, c) {
                    return hl.call(a, c)
                } : op,
                Th = w(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = it(c, b);
                    return a ? c + d : d + c
                }),
                Re = [2277735313, 289559509],
                Se = [1291169091,
                    658871167
                ],
                jt = E("p.cd", function(a, c) {
                    if (pd(a) || Oe(a)) {
                        var b = Na(a);
                        if (ia(b.C("jn"))) {
                            b.D("jn", !1);
                            var d = a.gj || sd(a) ? function() {} : /./,
                                e = Ud(a, N(c));
                            d.toString = function() {
                                b.D("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            e.log("%c%s", "color: inherit", d)
                        }
                    }
                }),
                kt = x(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Pa(a) && Ma(v(Y("name"), Ya(/Chrome PDF Viewer/)), a))
                }),
                lc = la(function(a, c) {
                    return I(c).C(a, null)
                }),
                lp = {
                    "*": "+",
                    "-": "/",
                    cj: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                lt = x(function(a) {
                    return U(n(a, "yandex.getSiteUid")) ?
                        a.yandex.getSiteUid() : null
                }),
                hp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                sb, gp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                xi = (sb = {}, sb.responseEnd = 1, sb.domInteractive = 1, sb.domContentLoadedEventStart =
                    1, sb.domContentLoadedEventEnd = 1, sb.domComplete = 1, sb.loadEventStart = 1, sb.loadEventEnd = 1, sb.unloadEventStart = 1, sb.unloadEventEnd = 1, sb.secureConnectionStart = 1, sb),
                jp = x(wd),
                dp = x(Cc),
                ep = x(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (U(c) && !pd(a)) return (new J(G(c, a, 0, 0))).then(function() {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](w(!0, P));
                    if (Md(a)) return c = n(a, "navigator.serviceWorker"), J.resolve(V(c));
                    c = n(a,
                        "openDatabase");
                    if (sd(a) && U(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return J.resolve(b)
                    }
                    return J.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                mt = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                nt = x(function(a, c) {
                    var b = Nb(a),
                        d = S(a).search.match(mt);
                    return d && 2 <= d.length ? (d = d[2], c.tb || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
                }),
                ot = E("pa.plgn", function(a, c) {
                    var b = he(a, c);
                    b && b.$.F(["pluginInfo"], D(a, "c.plgn", function() {
                        var d = I(a);
                        d.D("cmc", d.C("cmc", 0) + 1);
                        return fk(c)
                    }))
                }),
                il = dc.split("."),
                pt = il.pop(),
                jl = H(".", il),
                cm = x(function(a) {
                    a = S(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                bm = x(function(a) {
                    return -1 !== S(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                qt = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/,
                fe = x(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(qt));
                    return c
                }),
                rt = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                To = x(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(rt));
                    return c
                }),
                kl = ua.Qa + "//" + dc + "/metrika",
                ll = kl + "/metrika_match.html",
                tb, cb, dm = (tb = {}, tb.am = "com.am", tb.tr = "com.tr", tb.ge = "com.ge", tb.il = "co.il", tb["\u0440\u0444"] = "ru", tb["xn--p1ai"] = "ru", tb["\u0443\u043a\u0440"] = "ua", tb["xn--j1amh"] = "ua", tb["\u0431\u0435\u043b"] = "by", tb["xn--90ais"] = "by", tb),
                ml = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                em = (cb = {}, cb.ka = "ge", cb.ro = "md", cb.tg = "tj", cb.tk = "tm", cb.et = "ee", cb.hy = "com.am", cb.he = "co.li", cb.ky = "kg", cb.uk = "ua", cb.be = "by", cb.tr = "com.tr", cb.kk = "kz", cb),
                $o = "ar:1:pv:1:v:" + ua.fb + ":vf:" + Vc.version,
                ap = ua.Qa + "//" + dc + "/watch/" + ua.jg,
                nl = {},
                st = E("exps.int", function(a, c) {
                    var b;
                    return b = {}, b.experiments = function(d, e, f) {
                            var g, h;
                            void 0 === e && (e = C);
                            if (d && 0 < d.length) {
                                var k = ta(a, "e", c),
                                    l = Cd(c).url;
                                d = k({
                                    K: Ja((g = {}, g.ex = 1, g.ar = 1, g)),
                                    H: (h = {}, h["page-url"] = l || S(a).href, h.exp = d, h)
                                }, c);
                                return Nc(a, "exps.s", d, e, f)
                            }
                        },
                        b
                }),
                hf = [],
                tt = E("p.fh", function(a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Na(a),
                        f = da(a),
                        g = e.C("wasSynced"),
                        h = {
                            id: 3,
                            Z: "0"
                        };
                    return c && g && g.time + 864E5 > f(aa) ? J.resolve(g) : ta(a, "f", h)({
                        K: Ja((b = {}, b.pv = 1, b)),
                        H: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(aa), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                        e.D("wasSynced", k);
                        return k
                    })["catch"](D(a, "f.h"))
                }),
                ut = la(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Pd.D("ymoo" + a.oa,
                        a.Zf(jb)), a.hd && a.hd.destruct && a.hd.destruct())
                }),
                nf = v(Y("settings.pcs"), oa("1")),
                Qo = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Ro = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                wi = {
                    H: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                vi = {
                    id: 42822899,
                    Z: "0"
                },
                Ze, Xo = (Ze = {}, Ze.s = "p", Ze["8"] = "i", Ze),
                Uo = pb("csp", function(a, c) {
                    return ta(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                kh = "et w v z i u vf".split(" "),
                ol = Kd("wv"),
                vt = Kd("pub"),
                Hc = function() {
                    function a(c) {
                        this.l = c
                    }
                    a.isEnabled = function(c) {
                        return !!c.JSON
                    };
                    a.prototype.Ca = function(c) {
                        return yf(kb(this.l, c))
                    };
                    a.prototype.eb = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = kb(this.l, c.data));
                        return b
                    };
                    a.prototype.Ra = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.Vc = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    return a
                }(),
                pl = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                wt = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                xt = function() {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.Cc = !1;
                        this.meta = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.involvedTime = this.qf = 0;
                        this.Qd = this.yf = "";
                        this.fa = [];
                        this.le = this.Oa = 0;
                        this.zb = {
                            h: 0,
                            w: 0
                        };
                        this.buffer = [];
                        this.kg = wt;
                        this.flush = function() {
                            g.le = W(g.l, g.flush, 2500);
                            var h = g.yd();
                            if (g.buffer.length || h) {
                                var k = Ed(g.buffer);
                                h && k.push(h);
                                g.yf = g.Qd;
                                g.na.Ca(k)(Ra(D(g.l, "p.b.st"), function(l) {
                                    l && g.Tb(l)
                                }))
                            }
                        };
                        this.Tb = e;
                        this.na = d;
                        this.Zb = G(this.Zb, this);
                        this.yd = G(this.yd, this);
                        this.flush = G(this.flush, this);
                        this.l = c;
                        this.oa = f;
                        this.Rc = b;
                        this.Ld = "pai" + b.id;
                        this.Kb();
                        this.Me = ja(this.l);
                        this.time = da(this.l);
                        this.dg();
                        this.Bd = I(this.l)
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.le = W(this.l, this.flush, 2500);
                        if (!this.Cc) {
                            this.Ci();
                            var b = this.Bd.C(this.Ld, []),
                                d = !b.length;
                            b.push(G(this.Sh, this));
                            this.Bd.Ma(this.Ld, b);
                            d && this.Hf();
                            var e = function(f, g) {
                                return (f.ie || 0) <= (g.ie || 0) ? g : f
                            };
                            ja(this.l).F(this.l, ["click"],
                                function(f) {
                                    if (c.fa.length) {
                                        f = cj(f);
                                        var g = S(c.l).hostname,
                                            h;
                                        if (h = f) h = ye(f.hostname) === ye(g);
                                        h && (f = M(e, c.fa[0], c.fa).id, g = xc(c.l), Yc(c.l, c.oa.split(":")[0]).D("pai", f + "-" + g))
                                    }
                                });
                            this.Zb({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.Pi();
                        this.Cc = !0;
                        this.flush();
                        pa(this.l, this.le)
                    };
                    a.prototype.kf = function(c) {
                        return fc("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.Hf = function() {
                        var c = this;
                        D(this.l, "p.ic" + this.Rc.id, function() {
                            if (!c.Cc) {
                                var b = c.Bd.C(c.Ld),
                                    d = c.Rc.Xg();
                                y(function(e) {
                                    var f = A(function(g) {
                                        return z({}, g)
                                    }, d);
                                    U(e) && e(f)
                                }, b);
                                c.Oa = W(c.l, G(c.Hf, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.Sh = function(c) {
                        this.Cc || (this.Qi(c), this.Ri(), this.Cg())
                    };
                    a.prototype.Zb = function(c) {
                        var b = this;
                        D(this.l, "p.ec." + this.Rc.id, function() {
                            var d, e;
                            try {
                                var f = c.type;
                                var g = c.target
                            } catch (p) {
                                return
                            }
                            var h = "page" === f;
                            if ("scroll" === f || h) {
                                var k = [b.l, b.l.document, b.l.document.documentElement, Ac(b.l)];
                                L(g, k) && b.Kb()
                            }("resize" === f || h) && b.dg();
                            f = b.time(aa);
                            var l = Math.min(f - b.qf, 5E3);
                            b.involvedTime +=
                                Math.round(l);
                            b.qf = f;
                            if (b.meta && b.scroll && b.zb) {
                                var m = b.zb.h * b.zb.w;
                                b.fa = A(function(p) {
                                    var q = z({}, p),
                                        r = b.meta[q.id],
                                        u = Jc(p.Fb);
                                    if (!r || b.kf(q.element) || !u) return q;
                                    p = b.l.Math;
                                    r = p.max((b.scroll.y + b.zb.h - r.y) / r.height, 0);
                                    var t = u.height * u.width;
                                    u = Jj(b.l, u, b.zb);
                                    q.ie = u / m;
                                    q.visibility = u / t;
                                    if (.9 <= q.visibility || .1 <= q.ie) q.involvedTime += l;
                                    q.maxScrolled = p.round(1E4 * r) / 1E4;
                                    return q
                                }, b.fa);
                                mb(b.l, (d = {}, d.name = "publishers", d.counterKey = b.oa, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = b.fa.map(function(p) {
                                    var q;
                                    return z((q = {}, q.contentElement = p.Fb, q), p)
                                }), e), d))
                            }
                        })()
                    };
                    a.prototype.Qi = function(c) {
                        var b = A(function(d) {
                            return d.id
                        }, this.fa);
                        this.fa = this.fa.concat(Z(function(d) {
                            return !L(d.id, b)
                        }, c))
                    };
                    a.prototype.dg = function() {
                        var c = Ke(this.l) || Tc(this.l);
                        this.zb = {
                            w: c[0],
                            h: c[1]
                        }
                    };
                    a.prototype.Ri = function() {
                        var c = this;
                        D(this.l, "p.um." + this.Rc.id, function() {
                            var b = [];
                            c.Kb();
                            c.meta = M(function(d, e) {
                                var f;
                                if (c.kf(e.element)) b.push(e), delete d[e.id];
                                else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0),
                                        f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                    e.Fb && (f = Jc(e.Fb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.fa);
                            y(function(d) {
                                d = Ae(c.l)(d, c.fa);
                                c.fa.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.yd = function() {
                        var c, b, d = A(w(this.meta, n), ea(this.meta));
                        return d.length && (this.Qd = kb(this.l, d), this.yf !== this.Qd) ? (c = {}, c.type = "publishersHeader", c.data = (b = {},
                            b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null
                    };
                    a.prototype.Cg = function() {
                        var c = this;
                        if (this.fa.length) {
                            var b = A(function(d) {
                                var e, f = M(function(g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.kg);
                                d.Qf = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e
                            }, Z(function(d) {
                                return !d.Qf
                            }, this.fa));
                            b.length && (this.buffer = this.buffer.concat(b), vb(this.l, this.oa, "Publisher content info found: ", b))
                        }
                    };
                    a.prototype.Ci = function() {
                        this.Me.F(this.l, pl, this.Zb)
                    };
                    a.prototype.Pi = function() {
                        this.Me.Xb(this.l,
                            pl, this.Zb)
                    };
                    a.prototype.Kb = function() {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                Wd, lh = (Wd = {}, Wd[1] = 500, Wd[2] = 500, Wd[3] = 0, Wd),
                yt = ["topics", "rubric", "authors"],
                mh = function() {
                    function a(c, b) {
                        var d, e = this;
                        this.id = "a";
                        this.Gd = !1;
                        this.Ib = {};
                        this.wb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            uf: ["article"]
                        };
                        this.xe = (d = {}, d.Answer = 3,
                            d.Review = 2, d);
                        this.Qe = x(function(f, g, h) {
                            vb(e.l, e.oa, "Warning: invalid value " + h + " in " + g + " in field " + f + ", this item will be ignored")
                        }, function(f, g, h) {
                            return "" + f + g + h
                        });
                        this.Ti = function(f) {
                            yt.forEach(function(g) {
                                f[g] && (f[g] = f[g].reduce(function(h, k) {
                                    var l = k.name,
                                        m = k.position;
                                    if (!l) return e.Qe(g, "name", l), h;
                                    if ("string" === typeof m) {
                                        l = sf(m);
                                        if (null === l || e.l.isNaN(l)) return e.Qe(g, "position", m), h;
                                        k.position = l
                                    }
                                    h.push(k);
                                    return h
                                }, []))
                            });
                            return f
                        };
                        this.Ig = x(function(f, g) {
                            vb(e.l, e.oa, "Warning: content has only " +
                                g.chars + " chars. Required " + lh[g.type], g)
                        });
                        this.l = c;
                        this.root = ac(c);
                        this.oa = b
                    }
                    a.prototype.Ka = function(c) {
                        return c.element
                    };
                    a.prototype.Xe = function(c, b) {
                        var d = this,
                            e;
                        D(this.l, "P.s." + b, function() {
                            e = d.Ib[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.si = function(c) {
                        var b = z({}, c);
                        this.Gd && !b.id && L(c.type, [3, 2]) && (c = H(", ", A(Y("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.uh(b.Fb));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ?
                            b.id : this.sh());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.Ea = function(c) {
                        var b = this,
                            d = {},
                            e = this.Ka(c);
                        if (!e) return null;
                        d.type = c.type;
                        y(function(g) {
                            d[g] = b.Xe(c, g)
                        }, ea(this.Ib));
                        var f = da(this.l);
                        d.stamp = f(Bg);
                        d.element = c.element;
                        d.Fb = e;
                        d = this.Ti(this.si(d));
                        d.id = d.id ? sc(d.id) : 1;
                        d.update = function(g) {
                            return b.Ka(c) ? b.Xe(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.uh = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = Za(tc("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.sh = function() {
                        var c = tc('[rel="canonical"]',
                            this.root);
                        if (c) return c.href
                    };
                    a.prototype.bf = function() {
                        return 1
                    };
                    a.prototype.sc = function() {
                        return []
                    };
                    a.prototype.Xg = function() {
                        var c = this,
                            b = this.sc(),
                            d = 1;
                        return M(function(e, f) {
                            var g = c.Ea({
                                element: f,
                                type: c.bf(f)
                            }) || [];
                            ca(g) || (g = [g]);
                            g = M(function(h, k) {
                                var l = h.values,
                                    m = h.df;
                                k && k.chars > lh[k.type] && !L(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= lh[k.type] && c.Ig(k.id, k);
                                return {
                                    values: l,
                                    df: m
                                }
                            }, {
                                values: [],
                                df: A(Y("id"), e)
                            }, g).values;
                            return e.concat(A(function(h) {
                                var k;
                                h = z((k = {
                                        index: d,
                                        Qf: !1
                                    }, k.involvedTime =
                                    0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                ql = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Gd = !0;
                        d.Je = H(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Ib = (b = {}, b.id = function(e) {
                                var f = e.data["@id"];
                                e = e.data.mainEntity || e.data.mainEntityOfPage;
                                !f && ra(e) && (f = e["@id"]);
                                return f
                            }, b.chars = function(e) {
                                var f = e.data;
                                return na(f.text) ? f.text.length : Ub(this.Ka(e)).length
                            }, b.authors =
                            function(e) {
                                e = e.data;
                                var f = [];
                                f = f.concat(this.rc(e, "author"));
                                f = f.concat(this.rc(e.mainEntity, "author"));
                                return f.concat(this.rc(e.mainEntityOfPage, "author"))
                            }, b.pageTitle = function(e) {
                                var f = e.data,
                                    g = f.headline || "";
                                f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                                "" === g && (f.name ? g = f.name : f.itemReviewed && (g = f.itemReviewed));
                                3 === e.type && ra(f.parentItem) && (g = f.parentItem.text);
                                return g
                            }, b.updateDate = function(e) {
                                return e.data.dateModified || ""
                            }, b.publicationDate = function(e) {
                                return e.data.datePublished ||
                                    ""
                            }, b.pageUrlCanonical = function(e) {
                                return e.data.url
                            }, b.topics = function(e) {
                                return this.rc(e.data, "about", ["name", "alternateName"])
                            }, b.rubric = function(e) {
                                var f = this,
                                    g = this.Ka(e);
                                e = Z(Boolean, A(function(h) {
                                    h = Hb(f.l, Ub(h));
                                    if (ra(h) || ca(h)) {
                                        var k = f.Ye(h);
                                        if (k) return M(function(l, m) {
                                            return l ? l : ra(m) && "BreadcrumbList" === m["@type"] ? m : l
                                        }, null, k);
                                        if ("BreadcrumbList" === h["@type"]) return h
                                    }
                                    return null
                                }, [e.element].concat(ob(this.Je, document.body === g ? document.documentElement : g))));
                                return e.length && (e = e[0].itemListElement,
                                    ca(e)) ? Z(Boolean, A(function(h) {
                                    return ra(h) && h.item && ra(h.item) && !f.l.isNaN(h.position) ? {
                                        name: h.item.name || h.name,
                                        position: h.position
                                    } : null
                                }, e)) : []
                            }, b);
                        return d
                    }
                    Ka(c, a);
                    c.prototype.rc = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = ca(b[d]) ? b[d] : [b[d]];
                        b = Z(P, A(function(f) {
                            return f ? "string" === typeof f ? f : M(function(g, h) {
                                return g || "" + f[h]
                            }, "", e) : null
                        }, b));
                        return A(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.Ka = function(b) {
                        var d = b.element,
                            e = b.data || {};
                        b = e["@id"];
                        var f = e.url;
                        e = null;
                        f && na(f) && (e = this.Pe(f));
                        !e && b && na(b) && (e = this.Pe(b));
                        e || (e = b = d.parentNode, !fc("head", this.l, d) && b && 0 !== Ub(b).length) || (e = this.l.document.body);
                        return e
                    };
                    c.prototype.Pe = function(b) {
                        try {
                            var d = Ic(this.l, b).hash;
                            if (d) {
                                var e = tc(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.Wd = function(b) {
                        return this.xe[b["@type"]] || 1
                    };
                    c.prototype.Ea = function(b) {
                        var d = this,
                            e = b.element,
                            f = b.data;
                        if (!f && (f = Hb(this.l, Ub(e)), !f || !/schema\.org/.test(f["@context"]) && !ca(f))) return null;
                        var g =
                            this.Ye(f);
                        if (g) return A(function(k) {
                            return ra(k) && L(k["@type"], d.wb["schema.org"]) ? a.prototype.Ea.call(d, {
                                element: e,
                                data: k,
                                type: d.Wd(k)
                            }) : null
                        }, g);
                        b.data = f;
                        if ("QAPage" === b.data["@type"]) {
                            var h = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!h) return null
                        }
                        "Question" === b.data["@type"] && (h = b.data);
                        return h ? (b = qc(w(h, n), ["acceptedAnswer", "suggestedAnswer"]), A(function(k) {
                            var l;
                            if (!ra(k) || !L(k["@type"], d.wb["schema.org"])) return null;
                            k = {
                                element: e,
                                type: d.Wd(k),
                                data: z((l = {}, l.parentItem = h, l), k)
                            };
                            return a.prototype.Ea.call(d,
                                k)
                        }, b)) : L(b.data["@type"], this.wb["schema.org"]) ? a.prototype.Ea.call(this, z(b, {
                            type: this.Wd(b.data)
                        })) : null
                    };
                    c.prototype.sc = function() {
                        return ob(this.Je, this.root)
                    };
                    c.prototype.Ye = function(b) {
                        if (ca(b)) return b;
                        if (b && ca(b["@graph"])) return b["@graph"]
                    };
                    return c
                }(mh),
                nh = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Gd = !0;
                        d.Oi = sa("exec", new RegExp("schema.org\\/(" + H("|", ea(d.xe)) + ")$"));
                        d.Ib = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = bb(this.l, e, "identifier");
                            return f ?
                                Za(f) : (f = bb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                var k = bb(this.l, e, g[h]);
                                if (k) {
                                    f = Za(k).length;
                                    break
                                }
                            }
                            e = Ub(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = Rd(this.l, e.element, "about");
                            return A(function(h) {
                                var k = {
                                    name: Za(h)
                                };
                                if (g = bb(f.l, h, "name")) k.name = Za(g);
                                return k
                            }, g)
                        }, b.rubric = function(e) {
                            var f =
                                this;
                            (e = tc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = tc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? A(function(g) {
                                return {
                                    name: Za(bb(f.l, g, "name")),
                                    position: Za(bb(f.l, g, "position"))
                                }
                            }, Rd(this.l, e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e = bb(this.l, e.element, "dateModified")) ? wk(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = bb(this.l, e.element, "datePublished")) ? wk(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = Rd(this.l, e.element, "url");
                            if (e.length) {
                                var f =
                                    e[0];
                                return f.href ? f.href : Za(e)
                            }
                            return null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = bb(this.l, g, "headline");
                            h && (f += Za(h));
                            (h = bb(this.l, g, "alternativeHeadline")) && (f += " " + Za(h));
                            "" === f && ((h = bb(this.l, g, "name")) || (h = bb(this.l, g, "itemReviewed")), h && (f += Za(h)));
                            3 === e.type && (e = fc('[itemtype$="schema.org/Question"]', this.l, g)) && (e = bb(this.l, e, "text")) && (f += Za(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = Rd(this.l, e.element, "author");
                            return A(function(g) {
                                var h, k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") ||
                                    "") && (h = bb(f.l, g, "name")) && (k.name = Za(h));
                                k.name || (k.name = g.getAttribute("content") || Ub(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }
                    Ka(c, a);
                    c.prototype.bf = function(b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Oi(b)) ? this.xe[b[1]] : 1
                    };
                    c.prototype.Ea = function(b) {
                        return b.element && Ub(b.element).length ? a.prototype.Ea.call(this, b) : null
                    };
                    c.prototype.sc = function() {
                        var b = H(",", A(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.wb["schema.org"]));
                        return ob(b, this.root)
                    };
                    return c
                }(mh),
                rl = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Ib = (e = {}, e.chars = function(g) {
                                g = this.Ka(g);
                                return Ub(g).length
                            }, e.authors = function(g) {
                                return this.ud(g.data.author)
                            }, e.pageTitle = function(g) {
                                return this.wc(g.data.title) || ""
                            }, e.updateDate = function(g) {
                                return this.wc(g.data.modified_time)
                            }, e.publicationDate = function(g) {
                                return this.wc(g.data.published_time)
                            }, e.pageUrlCanonical = function(g) {
                                return this.wc(g.data.url)
                            }, e.rubric = function(g) {
                                return this.ud(g.data.section)
                            }, e.topics = function(g) {
                                return this.ud(g.data.tag)
                            },
                            e);
                        f.Qg = new RegExp("^(og:)?((" + H("|", f.wb.uf) + "):)?");
                        return f
                    }
                    Ka(c, a);
                    c.prototype.ud = function(b) {
                        var d;
                        return b ? ca(b) ? A(function(e) {
                            var f;
                            return f = {}, f.name = e ? "" + e : null, f
                        }, b) : [(d = {}, d.name = b ? "" + b : null, d)] : []
                    };
                    c.prototype.wc = function(b) {
                        return ca(b) ? b.length ? "" + b[0] : null : b ? "" + b : null
                    };
                    c.prototype.sc = function() {
                        var b = ob('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.kh = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.Ka(b);
                        e = ob("meta[property]", e ===
                            this.l.document.head ? e : g);
                        if (e.length) y(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Qg, ""),
                                        l = Za(h);
                                    f[k] ? ca(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                qe(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return L(f.type, this.wb.uf) ? z(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.Ka = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.Ea = function(b) {
                        return (b = this.kh(b)) ? a.prototype.Ea.call(this, b) : null
                    };
                    return c
                }(mh),
                Jo = x(function(a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return Ko;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                Fo = ti(!1),
                Eo = ti(!0),
                ki = function() {
                    function a(c) {
                        this.l = c
                    }
                    a.isEnabled = function(c) {
                        return li(c)
                    };
                    a.prototype.Xf = function(c) {
                        var b;
                        return {
                            stamp: da(this.l)(Bg),
                            data: (b = {}, b[c.type] =
                                c.data, b)
                        }
                    };
                    a.prototype.eb = function(c) {
                        return oe(this.l, Of, this.Xf(c))(Ne(C))
                    };
                    a.prototype.Ra = function(c) {
                        return c[0]
                    };
                    a.prototype.Vc = function(c) {
                        return [c]
                    };
                    a.prototype.Ca = function(c) {
                        var b = this;
                        c = oe(this.l, mi, {
                            buffer: A(G(this.Xf, this), c)
                        });
                        return oc(this.l, c, 20, Me)(Xe(function(d) {
                            d = Lf(b.l, d.slice(-4));
                            return oc(b.l, d, 20, Me)
                        }))(Yg(function(d) {
                            return d[d.length - 1]
                        }))
                    };
                    return a
                }(),
                Xd = {};
            ql && (Xd.json_ld = ql);
            nh && (Xd.schema = nh, Xd.microdata = nh);
            rl && (Xd.opengraph = rl);
            var zt = E("p.p", function(a, c) {
                    function b(l) {
                        var m =
                            z({}, k);
                        m.aa.ca = l;
                        return e(m, c)["catch"](D(a, "s.ww.p"))
                    }
                    var d = Pn(a);
                    if (!Aa("querySelectorAll", a.document.querySelectorAll) || !d) return J.resolve();
                    var e = ta(a, "p", c),
                        f = Ja(),
                        g = Yc(a, c.id),
                        h = g.C("pai");
                    h && (g.Hb("pai"), f.D("pai", h));
                    var k = {
                        H: {},
                        K: f,
                        Za: {
                            hf: !(d instanceof Hc)
                        },
                        aa: {}
                    };
                    return qa(c, D(a, "ps.s", function(l) {
                        if (l = n(l, "settings.publisher.schema")) {
                            gk(c) && (l = "microdata");
                            var m = Xd[l];
                            if (m && d) {
                                var p = N(c);
                                m = new m(a, p);
                                (new xt(a, m, d, b, p)).start();
                                vb(a, p, 'Publishers analytics schema "' + l + '"')
                            }
                        }
                    }))
                }),
                At =
                function() {
                    function a(c, b) {
                        this.l = c;
                        this.ih = b
                    }
                    a.prototype.Ca = function(c) {
                        return yf(qc(G(this.eb, this), c))
                    };
                    a.prototype.eb = function(c, b) {
                        var d = this,
                            e = [],
                            f = this.ih(this.l, b && b.type, c.type);
                        f && (e = qc(function(g) {
                            return g({
                                l: d.l,
                                qa: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.Ra = function(c) {
                        return c.length
                    };
                    a.prototype.Vc = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                sl = function() {
                    function a(c, b, d) {
                        this.Ke = 0;
                        this.Xd = 1;
                        this.$c = 5E3;
                        this.l = c;
                        this.na = b;
                        this.Tb = d
                    }
                    a.prototype.Uc = function() {
                        this.Ke =
                            W(this.l, v(G(this.flush, this), G(this.Uc, this)), this.$c, "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        var d = this.Tb(c, b || [], this.Xd);
                        this.Xd += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                yn = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.lg = 7500;
                        b.$c = 3E4;
                        b.Uc();
                        return b
                    }
                    Ka(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.na.eb(b, d);
                        Va(this.buffer, e);
                        this.na.Ra(this.buffer) > this.lg && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length &&
                            (this.send(b), this.buffer = [])
                    };
                    return c
                }(sl),
                Nn = /opera mini/i,
                ei = ["phone", "email"],
                tl = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                Kn = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                Ln = [65, 90],
                Mn = [97, 122],
                In = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                Gn = new RegExp("(" + H("|", tl) + ")", "i"),
                Fn = new RegExp("(" + H("|", ei) + ")", "i"),
                xk = ["password", "passwd", "pswd"],
                Hn = new RegExp("(" + H("|", tl.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Xa = "metrikaId_" + Math.random(),
                vc = {
                    counter: 0
                },
                Br = x(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                yr = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                Bt = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        mj: new RegExp("(" + H("|", a) + ")", "i"),
                        xj: new RegExp("(" + H("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        kj: /ym-record-keys/i,
                        ai: "\u2022",
                        wj: 88
                    }
                }(),
                Ck = gb(w(Bt.ai, P)),
                ld = !0,
                Qg = "",
                Rg = !1,
                Sg = !0,
                Tg = !1,
                Dn = la(function(a, c) {
                    var b = F([a, "efv." + c.event], D);
                    c.N = A(v(P, b), c.N);
                    return c
                }),
                ul = x(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(Ef), b.push(Er), b.push(Fr));
                    a.document.addEventListener ? c.push(Ak) : (b.push(zk), d.push(Ak));
                    c = za([{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        N: [C]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        N: [C]
                    }, {
                        event: "click",
                        N: [Te]
                    }, {
                        event: "dblclick",
                        N: [Te]
                    }, {
                        event: "mousedown",
                        N: [Te]
                    }, {
                        event: "mouseup",
                        N: [Hr]
                    }, {
                        event: "keydown",
                        N: [Ir]
                    }, {
                        event: "keypress",
                        N: [Jr]
                    }, {
                        event: "copy",
                        N: [Ek]
                    }, {
                        event: "blur",
                        N: c
                    }, {
                        event: "focusin",
                        N: b
                    }, {
                        event: "focusout",
                        N: d
                    }], !a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        N: [ci]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        N: [Ef]
                    }] : [], a.document.addEventListener ? [{
                        event: "focus",
                        N: [zk]
                    }, {
                        event: "change",
                        N: [Bk]
                    }, {
                        event: "submit",
                        N: [Gk]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        N: [Bk]
                    }, {
                        type: "form",
                        event: "submit",
                        N: [Gk]
                    }]);
                    return Cn(a, c)
                }),
                An =
                x(function(a) {
                    return za(Ac(a) ? [{
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        N: [Kr]
                    }] : [])
                }),
                Ct = ["submit", "beforeunload", "unload"],
                Dt = x(function(a, c) {
                    var b = c(a);
                    return M(function(d, e) {
                        d[e.type + ":" + e.event] = e.N;
                        return d
                    }, {}, b)
                }),
                Et = w(ul, function(a, c, b, d) {
                    return Dt(c, a)[b + ":" + d] || []
                }),
                Bn = /^\s*function submit\(\)/,
                Ft = E("fw.p", function(a, c) {
                    var b;
                    if (!(b = c.Ng || !c.Ab)) {
                        var d = I(a),
                            e = !1;
                        b = d.C("hitParam", {});
                        var f = N(c);
                        b[f] && (d = d.C("counters", {}), e = !(!be(c.Z) || d[f]));
                        b[f] = 1;
                        b = e
                    }
                    if (b) return J.resolve(C);
                    b = new At(a,
                        Et);
                    return xn(a, c, b, ul, Ct)
                }),
                oh, vl = (oh = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.ue = 0;
                        d.Db = 0;
                        d.te = 0;
                        d.buffer = [];
                        d.$c = 2E3;
                        d.$ = jd(b);
                        d.Uc();
                        d.te = f;
                        return d
                    }
                    Ka(c, a);
                    c.prototype.Ve = function(b) {
                        return Z(Boolean, this.$.O("ag", b))
                    };
                    c.prototype.Ue = function(b, d) {
                        var e = this;
                        b(Ra(D(this.l, "wv2.b.st"), function(f) {
                            e.send(f, d)
                        }))
                    };
                    c.prototype.Bi = function(b, d) {
                        var e = this;
                        pa(this.l, this.Ke);
                        var f = Math.ceil(this.na.Ra(d) / 63E4),
                            g = this.na.Vc(d, f);
                        y(function(h, k) {
                            var l, m = z({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l));
                            l = e.na.Ca([m], !1);
                            e.Ue(l, [m])
                        }, g);
                        this.Uc()
                    };
                    c.prototype.send = function(b, d) {
                        var e = this;
                        this.$.O("se", d);
                        return a.prototype.send.call(this, b, d).then(P, function() {
                            e.$.O("see", d)
                        })
                    };
                    c.We = function(b, d, e, f, g) {
                        c.bd["" + b + d] || (this.bd[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.bd[d]
                    };
                    c.prototype.Qh = function() {
                        return this.te && this.ue >= this.te
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.Qh()) {
                            this.$.O("p", b);
                            var e = this.na.eb(b),
                                f = this.na.Ra(e);
                            7E5 < f ? this.Bi(b,
                                e) : (e = this.Ve(this.buffer.concat([b])), e = M(function(g, h) {
                                return g + d.na.Ra(d.na.eb(h))
                            }, 0, e), this.Db + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Db += f)
                        }
                    };
                    c.prototype.F = function(b, d) {
                        this.$.F([b], d)
                    };
                    c.prototype.ja = function(b, d) {
                        this.$.ja([b], d)
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer.concat(this.Ve(this.buffer));
                        if (b.length) {
                            this.buffer = [];
                            this.ue += this.Db;
                            this.Db = 0;
                            var d = this.na.Ca(b);
                            this.Ue(d, b)
                        }
                    };
                    return c
                }(sl), oh.bd = {}, oh),
                $a = function() {
                    function a(c, b, d) {
                        this.Uh = "wv2.c";
                        this.Ob = [];
                        this.ia = [];
                        this.l = c;
                        this.L = Cf(c, this, d, this.Uh);
                        this.G = b;
                        this.hb = this.G.nh();
                        this.start = this.L.J(this.start, "st");
                        this.stop = this.L.J(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.Ob = A(function(b) {
                            var d = b[0],
                                e = b[2];
                            b = G(c.L.J(b[1], d[0]), c);
                            return c.hb.F(e || c.l, d, b)
                        }, this.ia)
                    };
                    a.prototype.stop = function() {
                        y(ha, this.Ob)
                    };
                    a.prototype.Y = function(c) {
                        return this.G.ta().Y(c)
                    };
                    return a
                }(),
                vn = ["checkbox", "radio"],
                wn = /pwd|value|password/i,
                ph = Y("location.href"),
                Gt = function(a) {
                    function c(b, d, e) {
                        d =
                            a.call(this, b, d, e) || this;
                        d.sa = {
                            elements: [],
                            attributes: []
                        };
                        d.index = 0;
                        d.Sd = d.L.J(d.Sd, "o");
                        d.jd = d.L.J(d.jd, "io");
                        d.ad = d.L.J(d.ad, "ao");
                        d.$d = d.L.J(d.$d, "a");
                        d.Yd = d.L.J(d.Yd, "at");
                        d.ae = d.L.J(d.ae, "r");
                        d.Zd = d.L.J(d.Zd, "c");
                        d.za = new b.MutationObserver(d.Sd);
                        return d
                    }
                    Ka(c, a);
                    c.prototype.start = function() {
                        this.za.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.za.disconnect()
                    };
                    c.prototype.ad = function(b) {
                        var d = b.target;
                        b = b.attributeName;
                        var e = this.sa.elements.indexOf(d); - 1 === e && (e = this.sa.elements.push(d) - 1, this.sa.attributes[e] = {});
                        this.sa.attributes[e] || (this.sa.attributes[e] = {});
                        e = this.sa.attributes[e];
                        var f = d.getAttribute(b);
                        e[b] = ke(this.l, d, b, f, this.G.Jb()).value
                    };
                    c.prototype.jd = function(b) {
                        function d(k) {
                            var l = Rb(e.l)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                rd: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        y(function(k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q = k.target,
                                r = k.nextSibling,
                                u = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    e.ad(k);
                                    var t = d(q);
                                    t.rd[l] || (t.rd[l] = ke(e.l, q, l, p, e.G.Jb()).value);
                                    break;
                                case "childList":
                                    m && y(function(B) {
                                        t = d(B);
                                        t.Se || z(t, {
                                            Se: q,
                                            bh: r ? r : void 0,
                                            dh: u ? u : void 0
                                        })
                                    }, Ba(m));
                                    break;
                                case "characterData":
                                    t = d(q), t.Te || (t.Te = p)
                            }
                        }, b);
                        var h = this.G.ta();
                        y(function(k, l) {
                            h.me(k, g[l])
                        }, f)
                    };
                    c.prototype.Sd = function(b) {
                        var d = this;
                        if (ph(this.l)) {
                            var e = this.G.stamp();
                            this.jd(b);
                            y(function(f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h &&
                                            h.length && d.ae(Ba(h), e);
                                        g && g.length && d.$d(Ba(g), e);
                                        break;
                                    case "characterData":
                                        d.Zd(k, e)
                                }
                            }, b);
                            this.Yd(e)
                        } else this.stop()
                    };
                    c.prototype.Yd = function(b) {
                        var d = this;
                        y(function(e, f) {
                            var g = d.uc();
                            d.G.X("mutation", {
                                index: g,
                                attributes: d.sa.attributes[f],
                                target: d.Y(e)
                            }, "ac", b)
                        }, this.sa.elements);
                        this.sa.elements = [];
                        this.sa.attributes = []
                    };
                    c.prototype.$d = function(b, d) {
                        var e = this,
                            f = this.uc();
                        this.G.ta().yc({
                            nodes: b,
                            Tc: function(g) {
                                g = A(function(h) {
                                    h.node = void 0;
                                    return h
                                }, g);
                                e.G.X("mutation", {
                                        index: f,
                                        nodes: g
                                    }, "ad",
                                    d)
                            }
                        })
                    };
                    c.prototype.ae = function(b, d) {
                        var e = this,
                            f = this.uc(),
                            g = this.G.ta(),
                            h = A(function(k) {
                                var l = g.removeNode(k);
                                Ti(e.l, k, function(m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.G.X("mutation", {
                            index: f,
                            nodes: h
                        }, "re", d)
                    };
                    c.prototype.Zd = function(b, d) {
                        var e = this.uc();
                        this.G.X("mutation", {
                            value: b.textContent,
                            target: this.Y(b),
                            index: e
                        }, "tc", d)
                    };
                    c.prototype.uc = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }($a),
                Ht = function() {
                    function a(c, b) {
                        var d = this;
                        this.qc = [];
                        this.ib = [];
                        this.Rd = 1;
                        this.Oa = 0;
                        this.Ta = {};
                        this.Ac = {};
                        this.Dd = function(f) {
                            return d.ib.length ? L(f, d.ib) : !1
                        };
                        this.removeNode = function(f) {
                            var g = d.Y(f),
                                h = Ia(f);
                            if (h) return h = "NR:" + h.toLowerCase(), d.Dd(h) && d.$.O(h, {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.ob = function(f) {
                            var g = Ia(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                return h ? h : (h = d.Rd, f.__ym_indexer = h, d.Rd += 1, g = "NA:" + g.toLowerCase(), d.Dd(g) && d.$.O(g, {
                                    data: {
                                        node: f,
                                        id: h
                                    }
                                }), h)
                            }
                            return null
                        };
                        this.l = c;
                        var e = Cf(c, this, "i");
                        this.$ = jd(c);
                        this.options = b;
                        this.start = e.J(this.start, "st");
                        this.stop = e.J(this.stop, "sp");
                        this.Y =
                            e.J(this.Y, "i");
                        this.me = e.J(this.me, "o");
                        this.yc = e.J(this.yc, "a");
                        this.removeNode = e.J(this.removeNode, "r");
                        this.da = e.J(this.da, "s")
                    }
                    a.prototype.me = function(c, b) {
                        var d = this.ob(c);
                        Ua(d) || (this.Ac[d] && this.Y(c), this.Ac[d] = b)
                    };
                    a.prototype.F = function(c, b, d) {
                        c = "" + b + c;
                        this.ib.push(c);
                        this.Dd(c) || this.ib.push(c);
                        this.$.F([c], d)
                    };
                    a.prototype.ja = function(c, b, d) {
                        var e = "" + b + c;
                        this.ib = Z(function(f) {
                            return f !== e
                        }, this.ib);
                        this.$.ja([e], d)
                    };
                    a.prototype.start = function() {
                        this.Oa = W(this.l, v(G(this.da, this, !1), this.start),
                            50, "i.s")
                    };
                    a.prototype.stop = function() {
                        this.flush();
                        pa(this.l, this.Oa);
                        this.qc = []
                    };
                    a.prototype.yc = function(c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                Tc: c.Tc,
                                result: [],
                                zc: 0,
                                nodes: d
                            };
                        this.qc.push(f);
                        y(function(g) {
                            Ti(b.l, g, function(h) {
                                var k = b.ob(h);
                                Ua(k) || (d.push(h), b.Ta[k] && b.Y(h), b.Ta[k] = {
                                    node: h,
                                    event: f,
                                    Mi: e
                                }, e += 1)
                            })
                        }, c.nodes)
                    };
                    a.prototype.Y = function(c) {
                        if (c === this.l) return 0;
                        var b = this.ob(c),
                            d = this.Ta[b],
                            e = this.gh(b),
                            f = e.Se,
                            g = e.rd,
                            h = e.Te,
                            k = e.bh,
                            l = e.dh;
                        if (d) {
                            e = d.event;
                            d = d.Mi;
                            var m = hs(this.l) === c;
                            k = k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.ob(k) : null;
                            p = !m && p ? this.ob(p) : null;
                            m = this.l;
                            k = this.options;
                            f = this.ob(f || c.parentNode || c.parentElement) || 0;
                            var q = g,
                                r = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === q && (q = {});
                            void 0 === r && (r = Ia(c));
                            if (V(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    prev: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c
                                };
                                if (If(c)) {
                                    if (h = sn(c, h), g.attributes = {}, g.content = h)
                                        if (c = kd(m, c)) g.content = "" !== h.trim() ? Jn(m, h) : h, g.hidden = c
                                } else h = tn(m, c, k, q, r), m = h.rb, g.attributes = h.wg,
                                    m && (g.hidden = m), c.namespaceURI && Fb(c.namespaceURI, "svg") && (g.namespace = c.namespaceURI);
                                c = g
                            }
                            if (V(c)) return;
                            this.Ta[b] = null;
                            e.result[d] = c;
                            e.zc += 1;
                            e.nodes.length === e.zc && e.Tc(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.da(!0)
                    };
                    a.prototype.da = function(c) {
                        var b = this;
                        if (ph(this.l)) {
                            var d = ea(this.Ta);
                            d = M(function(e, f) {
                                b.Ta[f] && e.push(b.Ta[f].node);
                                return e
                            }, [], d);
                            d = nc(d, this.Y);
                            c = c ? Zj(C) : Xj(this.l, 20);
                            d(c);
                            this.qc = Z(function(e) {
                                return e.zc !== e.result.length
                            }, this.qc)
                        }
                    };
                    a.prototype.gh = function(c) {
                        if (Ua(c)) return {};
                        var b = this.Ac[c];
                        return b ? (this.Ac[c] = null, b) : {}
                    };
                    return a
                }(),
                It = ["input", "change", "keyup", "paste", "cut"],
                Jt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.nd = !1;
                        b.Hc = b.L.J(b.Hc, "ii");
                        b.Ic = b.L.J(b.Ic, "ir");
                        b.Nc = b.L.J(b.Nc, "ri");
                        b.Yc = b.L.J(b.Yc, "ur");
                        b.Cd = b.L.J(b.Cd, "ce");
                        b.xc = b.L.J(b.xc, "vc");
                        return b
                    }
                    Ka(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.G.ta();
                        this.nd = this.Dg();
                        y(function(e) {
                            e = e.toLowerCase();
                            d.F(e, "NA:", G(b.Hc, b));
                            d.F(e, "NR:", G(b.Ic, b))
                        }, Hf);
                        this.Ob = [this.hb.F(this.l.document,
                            It, G(this.Cd, this)), function() {
                            y(function(e) {
                                e = e.toLowerCase();
                                d.ja(e, "NA:", b.Hc);
                                d.ja(e, "NR:", b.Ic)
                            }, Hf);
                            y(b.Yc, ea(b.inputs))
                        }]
                    };
                    c.prototype.Yc = function(b) {
                        if (this.nd) {
                            var d = this.inputs[b];
                            d && (b = d.ni, d = d.element, b && this.l.Object.defineProperty(d, this.vc(d), b))
                        }
                    };
                    c.prototype.Ic = function(b) {
                        b && this.Yc(b.data.id)
                    };
                    c.prototype.Hc = function(b) {
                        b && (b = b.data, this.Nc(b.node, b.id))
                    };
                    c.prototype.vc = function(b) {
                        return Je(b) ? "checked" : "value"
                    };
                    c.prototype.Cd = function(b) {
                        if (b = b.target) {
                            var d = this.vc(b);
                            this.xc(b[d],
                                b)
                        }
                    };
                    c.prototype.xc = function(b, d) {
                        var e = this.Y(d),
                            f = this.inputs[e];
                        if (!f && (f = this.Nc(f, e), !f)) return;
                        e = f.Fg;
                        var g = f.value,
                            h = this.vc(d),
                            k = !b || L(typeof b, ["string", "boolean", "number"]),
                            l = this.G.Jb().Id;
                        k && b !== g && (g = ke(this.l, d, h, b, this.G.Jb()).value, e ? this.G.X("event", {
                            target: this.Y(d),
                            checked: !!b
                        }, "change") : (e = Kc(this.l, d, l), l = e.kb, this.G.X("event", {
                            value: g,
                            hidden: e.sb && !l,
                            target: this.Y(d)
                        }, "change")), f.value = b)
                    };
                    c.prototype.Nc = function(b, d) {
                        var e = this;
                        if (!Af(b) || "__ym_input_override_test" === b.getAttribute("class") ||
                            this.inputs[d]) return null;
                        var f = Je(b),
                            g = this.vc(b),
                            h = {
                                element: b,
                                Fg: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.nd && Lb(this.l, function() {
                            var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                m = z({}, k, l);
                            if (Aa("((set)?(\\s?" + g + ")?)?", m.set)) {
                                try {
                                    e.l.Object.defineProperty(b, g, z({}, m, {
                                        configurable: !0,
                                        set: function(p) {
                                            e.xc(p, this);
                                            return m.set.call(this, p)
                                        }
                                    }))
                                } catch (p) {}
                                h.ni = m
                            }
                        });
                        return h
                    };
                    c.prototype.Dg = function() {
                        var b = !0,
                            d = ab(this.l)("input");
                        try {
                            d = ab(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = z({}, e, f);
                            this.l.Object.defineProperty(d, "value", z({}, g, {
                                configurable: !0,
                                set: function(h) {
                                    return g.set.call(d, h)
                                }
                            }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !==
                            d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }($a),
                Kt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Xa = {
                            width: 0,
                            height: 0,
                            pageHeight: 0,
                            pageWidth: 0,
                            orientation: 0
                        };
                        b.ia.push([
                            ["resize"], b.li
                        ]);
                        b.ia.push([
                            ["orientationchange"], b.ji
                        ]);
                        return b
                    }
                    Ka(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.Kf()
                    };
                    c.prototype.li = function() {
                        var b = this.Ad();
                        this.Eh(b) && (this.Xa = b, this.Lf(b))
                    };
                    c.prototype.ji = function() {
                        var b = this.Ad();
                        this.Xa.orientation !== b.orientation && (this.Xa = b, this.zi(b))
                    };
                    c.prototype.lf = function(b) {
                        return !b.height || !b.width || !b.pageWidth || !b.pageHeight
                    };
                    c.prototype.Eh = function(b) {
                        return b.height !== this.Xa.height || b.width !== this.Xa.width
                    };
                    c.prototype.Ad = function() {
                        var b = this.G.mb(),
                            d = Tc(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.zd();
                        return {
                            width: e,
                            height: d,
                            pageWidth: b ? b.scrollWidth : 0,
                            pageHeight: b ? b.scrollHeight : 0,
                            orientation: this.G.mb().ph()
                        }
                    };
                    c.prototype.zi = function(b) {
                        var d;
                        void 0 === d && (d = this.G.stamp());
                        this.G.X("event", {
                                width: b.width,
                                height: b.height,
                                orientation: b.orientation
                            },
                            "deviceRotation", d)
                    };
                    c.prototype.Lf = function(b, d) {
                        void 0 === d && (d = this.G.stamp());
                        this.G.X("event", {
                            width: b.width,
                            height: b.height,
                            pageWidth: b.pageWidth,
                            pageHeight: b.pageHeight
                        }, "resize", d)
                    };
                    c.prototype.Kf = function() {
                        var b = this.Ad();
                        this.lf(b) ? W(this.l, G(this.Kf, this), 300) : (this.lf(this.Xa) && (this.Xa = b), this.Lf(b, 0))
                    };
                    return c
                }($a),
                $e = function() {
                    function a(c) {
                        this.index = 0;
                        this.yb = {};
                        this.l = c
                    }
                    a.prototype.lc = function(c, b, d) {
                        void 0 === d && (d = {});
                        var e = da(this.l),
                            f = this.index;
                        this.index += 1;
                        this.yb[f] = {
                            Oa: 0,
                            Sb: !1,
                            $g: c,
                            $b: [],
                            Md: e(aa)
                        };
                        var g = this;
                        return function() {
                            var h = Da(arguments),
                                k = d.jb && !g.yb[f].Sb,
                                l = g.yb[f];
                            pa(g.l, l.Oa);
                            l.$b = h;
                            l.Sb = !0;
                            var m = e(aa);
                            if (k || m - l.Md >= b) c.apply(void 0, h), l.Md = m;
                            l.Oa = W(g.l, function() {
                                k || (c.apply(void 0, h), l.Md = e(aa));
                                l.Sb = !1;
                                l.$b = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        y(function(b) {
                            var d = c.yb[b],
                                e = d.Oa,
                                f = d.$g,
                                g = d.$b;
                            d.Sb && (c.yb[b].Sb = !1, f.apply(void 0, g), pa(c.l, e))
                        }, ea(this.yb))
                    };
                    return a
                }(),
                Lt = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Yf = [];
                        d.Be = {
                            x: 0,
                            y: 0
                        };
                        d.Da = new $e(b);
                        d.Lc = d.L.J(d.Lc, "o");
                        d.ia.push([
                            ["scroll"], d.mi
                        ]);
                        return d
                    }
                    Ka(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.X("event", {
                            x: Math.max(this.l.scrollX, 0),
                            y: Math.max(this.l.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Da.flush()
                    };
                    c.prototype.mi = function(b) {
                        if (this.G.mb().ff()) this.Lc(b);
                        else {
                            var d = b.target,
                                e = Z(function(f) {
                                    return f[0] === d
                                }, this.Yf).pop();
                            e ? e = e[1] : (e = this.Da.lc(G(this.Lc, this),
                                100, {
                                    jb: !0
                                }), this.Yf.push([d, e]));
                            e(b)
                        }
                    };
                    c.prototype.Lc = function(b) {
                        var d = this.G.mb().zd();
                        b = b.target;
                        var e = this.Kb(b);
                        d = Ma(oa(b), [d, this.l, this.l.document]);
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Be.x === f && this.Be.y === e) return;
                            this.Be = {
                                x: f,
                                y: e
                            }
                        }
                        this.G.X("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.Y(b)
                        }, "scroll")
                    };
                    c.prototype.Kb = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window === b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g =
                            e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.G.mb().zd(), b) ? L(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop || 0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }($a),
                Mt = ["mousemove", "mousedown", "mouseup", "click"],
                Nt = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ia.push([Mt, d.ii]);
                        d.Da = new $e(b);
                        d.Gc = d.L.J(d.Gc, "n");
                        d.Gi = d.L.J(d.Da.lc(G(d.Gc, d), 100), "t");
                        return d
                    }
                    Ka(c, a);
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Da.flush()
                    };
                    c.prototype.ii =
                        function(b) {
                            var d = null;
                            try {
                                d = b.type
                            } catch (e) {
                                return
                            }
                            "mousemove" === d ? this.Gi(b) : this.Gc(b)
                        };
                    c.prototype.Gc = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.G.X("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.Y(b)
                        }, d)
                    };
                    return c
                }($a),
                Ot = ["focus", "blur"],
                Pt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([Ot, b.ah]);
                        return b
                    }
                    Ka(c, a);
                    c.prototype.ah = function(b) {
                        var d = b.target;
                        b = b.type;
                        this.G.X("event", {
                            target: this.Y(d === this.l ? this.l.document.documentElement : d)
                        }, b)
                    };
                    return c
                }($a),
                Qt = x(function(a) {
                    var c = La(a.getSelection, "getSelection");
                    return c ? G(c, a) : C
                }),
                Rt = v(Qt, ha),
                St = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                Tt = /text|search|password|tel|url/,
                Ut = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Ed = !1;
                        b.ia.push([St, b.Bh]);
                        return b
                    }
                    Ka(c, a);
                    c.prototype.Bh = function(b) {
                        var d = this.G,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.th(b) : this.rh()) &&
                            e.start !== e.end ? (this.Ed = !0, d.X("event", e, "selection")) : this.Ed && (this.Ed = !1, d.X("event", {
                                start: 0,
                                end: 0
                            }, "selection"))
                    };
                    c.prototype.rh = function() {
                        var b = Rt(this.l);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.l.document.createRange();
                            var d = this.Y(b.startContainer),
                                e = this.Y(b.endContainer);
                            if (!V(d) && !V(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                startNode: d,
                                endNode: e
                            }
                        }
                    };
                    c.prototype.th = function(b) {
                        if (Tt.test(b.type || "")) {
                            var d = this.Y(b);
                            if (!V(d)) return {
                                start: b.selectionStart,
                                end: b.selectionEnd,
                                target: d
                            }
                        }
                    };
                    return c
                }($a),
                Vt = {
                    focus: "windowfocus",
                    blur: "windowblur"
                },
                Wt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        V(b.l.document.hidden) ? V(b.l.document.msHidden) ? V(b.l.document.webkitHidden) || (b.visibility = {
                            hidden: "webkitHidden",
                            event: "webkitvisibilitychange"
                        }) : b.visibility = {
                            hidden: "msHidden",
                            event: "msvisibilitychange"
                        } : b.visibility = {
                            hidden: "hidden",
                            event: "visibilitychange"
                        };
                        b.handleEvent = b.L.J(b.handleEvent, "e");
                        return b
                    }
                    Ka(c, a);
                    c.prototype.start = function() {
                        this.Ob = [this.hb.F(this.l,
                            this.visibility ? [this.visibility.event] : ["focus", "blur"], G(this.handleEvent, this))]
                    };
                    c.prototype.handleEvent = function(b) {
                        this.G.X("event", {}, Vt[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                    };
                    return c
                }($a),
                Xt = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                Yt = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Wc = {};
                        d.scrolling = !1;
                        d.If = 0;
                        d.ia.push([
                            ["scroll"], d.yi, d.l.document
                        ]);
                        d.ia.push([Xt, d.Ii, d.l.document]);
                        d.Da = new $e(b);
                        d.Nb = d.L.J(d.Nb,
                            "nh");
                        d.Hi = d.L.J(d.Da.lc(d.Nb, d.G.mb().ff() ? 0 : 50, {
                            jb: !0
                        }), "th");
                        return d
                    }
                    Ka(c, a);
                    c.prototype.yi = function() {
                        var b = this;
                        this.scrolling = !0;
                        pa(this.l, this.If);
                        this.If = W(this.l, function() {
                            b.scrolling = !1
                        }, 150)
                    };
                    c.prototype.Ii = function(b) {
                        var d = this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches && 0 < b.changedTouches.length && y(function(f) {
                            var g = d.vh(f);
                            f.__ym_touch_id = g;
                            e && delete d.Wc[f.identifier]
                        }, Ba(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.Nb(b) : this.Hi(b, this.G.stamp()) :
                            this.Nb(b)
                    };
                    c.prototype.vh = function(b) {
                        this.Wc[b.identifier] || (this.Wc[b.identifier] = Xh());
                        return this.Wc[b.identifier]
                    };
                    c.prototype.Nb = function(b, d) {
                        void 0 === d && (d = this.G.stamp());
                        var e = b.type,
                            f = A(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, Ba(b.changedTouches));
                        0 < f.length && this.G.X("event", {
                            touches: f,
                            target: this.Y(b.target)
                        }, e, d)
                    };
                    return c
                }($a),
                Zt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([
                            ["load"], b.hi, b.l.document
                        ]);
                        return b
                    }
                    Ka(c, a);
                    c.prototype.hi = function(b) {
                        b = b.target;
                        "IMG" === Ia(b) && b.getAttribute("srcset") && this.G.X("event", {
                            target: this.Y(b),
                            value: b.currentSrc
                        }, "srcset")
                    };
                    return c
                }($a),
                $t = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ig = 1;
                        d.Da = new $e(b);
                        d.cc = d.L.J(d.cc, "z");
                        return d
                    }
                    Ka(c, a);
                    c.prototype.start = function() {
                        if (this.cf()) {
                            a.prototype.start.call(this);
                            this.cc();
                            var b = this.hb.F(n(this.l, "visualViewport"), ["resize"], this.Da.lc(this.cc, 10));
                            this.Ob.push(b)
                        }
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Da.flush()
                    };
                    c.prototype.cc = function() {
                        var b = this.cf();
                        b && b !== this.ig && (this.ig = b, this.Ai(b))
                    };
                    c.prototype.cf = function() {
                        var b = Ke(this.l);
                        return b ? b[2] : null
                    };
                    c.prototype.Ai = function(b) {
                        var d = $f(this.l);
                        this.G.X("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }($a),
                Yd, af = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                wl = {
                    "super": 1,
                    hj: 2,
                    alt: 3,
                    shift: 4,
                    Dj: 5,
                    "delete": 6,
                    ej: 6
                },
                au = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                xl = (Yd = {}, Yd["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Yd["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, Yd.Wh = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, Yd),
                bu = /flash/,
                cu = /ym-disable-keys/,
                du = /^&#/,
                eu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.pb = {};
                        d.La = 0;
                        d.Fa = [];
                        d.Wf = [];
                        d.oc = 0;
                        d.Df = 0;
                        d.ia.push([
                            ["keydown"], d.yh
                        ]);
                        d.ia.push([
                            ["keyup"], d.zh
                        ]);
                        d.rg = -1 !==
                            (n(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2";
                        d.Ec = d.L.J(d.Ec, "v");
                        d.pd = d.L.J(d.pd, "ec");
                        d.Sc = d.L.J(d.Sc, "sk");
                        d.xd = d.L.J(d.xd, "gk");
                        d.ne = d.L.J(d.ne, "sc");
                        d.bc = d.L.J(d.bc, "cc");
                        d.reset = d.L.J(d.reset, "r");
                        d.Pc = d.L.J(d.Pc, "rs");
                        return d
                    }
                    Ka(c, a);
                    c.prototype.yh = function(b) {
                        if (this.Ec(b) && !this.Ph(b)) {
                            var d = b.keyCode;
                            b.repeat || this.pb[d] || (this.pb[b.keyCode] = !0, af[b.keyCode] && !this.La ? (this.La += 1, this.ne(b), this.reset(300)) : this.La ? (this.Ag(), this.de(b), this.pd()) : (this.reset(), this.de(b)))
                        }
                    };
                    c.prototype.zh = function(b) {
                        if (this.Ec(b)) {
                            var d = b.keyCode,
                                e = af[b.keyCode];
                            this.pb[b.keyCode] && (this.pb[d] = !1);
                            e && this.La && (this.La = 0, this.pb = {});
                            1 === this.Fa.length && (b = this.Fa[0], L(b.keyCode, au) && (this.Sc([b], !0), this.reset()));
                            this.Fa = Z(v(oa(d), Wb), this.Fa);
                            pa(this.l, this.oc)
                        }
                    };
                    c.prototype.Ec = function(b) {
                        var d = this.l.document.activeElement;
                        b = b.target;
                        return !Ma(Boolean, [d && "OBJECT" === d.nodeName && bu.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && cu.test(b.className)])
                    };
                    c.prototype.pd = function() {
                        this.Wf = this.Fa.slice(0);
                        pa(this.l, this.oc);
                        this.oc = W(this.l, w(this.Wf, G(this.Sc, this)), 0, "e.c")
                    };
                    c.prototype.Sc = function(b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.xd(b);
                            this.G.X("event", {
                                keystrokes: e
                            }, "keystroke")
                        }
                    };
                    c.prototype.xd = function(b) {
                        var d = this;
                        b = A(function(e) {
                            e = e.keyCode;
                            var f = af[e],
                                g = d.oh(e);
                            return {
                                id: e,
                                key: g,
                                isMeta: !!f && du.test(g),
                                modifier: f
                            }
                        }, b);
                        return Fg(function(e, f) {
                            return (wl[e.modifier] || 100) - (wl[f.modifier] || 100)
                        }, b)
                    };
                    c.prototype.oh = function(b) {
                        return xl[this.rg][b] ||
                            xl.Wh[b] || String.fromCharCode(b)
                    };
                    c.prototype.de = function(b) {
                        L(b, this.Fa) || this.Fa.push(b)
                    };
                    c.prototype.ne = function(b) {
                        this.de(b);
                        this.bc()
                    };
                    c.prototype.bc = function() {
                        this.La ? W(this.l, this.bc, 100) : this.Fa = []
                    };
                    c.prototype.Ag = function() {
                        pa(this.l, this.Df)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.Df = W(this.l, G(this.Pc, this), b) : this.Pc()
                    };
                    c.prototype.Pc = function() {
                        this.La = 0;
                        this.Fa = [];
                        this.pb = {};
                        pa(this.l, this.oc)
                    };
                    c.prototype.Ph = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 ===
                            b.keyCode || "shift" === af[b.keyCode] : !1
                    };
                    return c
                }($a),
                rn = ["sr", "sd", "\u043d"],
                fu = /allow-same-origin/,
                gu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Vb = [];
                        d.sd = {};
                        d.Td = d.L.J(d.Td, "fi");
                        d.Ud = d.L.J(d.Ud, "sd");
                        d.Vd = d.L.J(d.Vd, "src");
                        d.za = new b.MutationObserver(d.Vd);
                        return d
                    }
                    Ka(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.Jb().dc && this.G.ta().F("iframe", "NA:", G(this.Td, this));
                        this.G.Ze().vd().F(["sdr"], G(this.Ud, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        y(function(b) {
                            b.G.stop()
                        }, this.Vb)
                    };
                    c.prototype.Vd = function(b) {
                        var d = b.pop().target;
                        if (b = wb(function(f) {
                                return f.ef === d
                            }, this.Vb)) {
                            this.Vb = Z(function(f) {
                                return f.ef !== d
                            }, this.Vb);
                            var e = b.G.wd();
                            try {
                                b.G.stop()
                            } catch (f) {}
                            this.kc(d, e)
                        }
                    };
                    c.prototype.Td = function(b) {
                        if (b) {
                            var d = b.data.node;
                            this.za.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.kc(d, b.data.id)
                        }
                    };
                    c.prototype.kc = function(b, d) {
                        var e = this;
                        this.Mh(b) && Qb(this.l, b)(Ra(C, function() {
                            var f = e.G.kc(b.contentWindow, d);
                            e.Vb.push({
                                G: f,
                                ef: b
                            })
                        }))
                    };
                    c.prototype.Ud = function(b) {
                        var d = this,
                            e = b.frameId;
                        b = b.data;
                        this.sd[e] || (this.sd[e] = {
                            data: []
                        });
                        var f = this.sd[e];
                        f.data = f.data.concat(b);
                        this.l.isNaN(f.md) && y(function(g) {
                            "page" === g.type && (f.md = g.data.recordStamp - d.G.$e())
                        }, f.data);
                        this.l.isNaN(f.md) || (this.G.da(A(function(g) {
                            g.stamp += f.md;
                            g.stamp = d.l.Math.max(0, g.stamp);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.Mh = function(b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") || e && !e.match(fu) || d && "about:blank" !==
                            d && (d = Ic(this.l, d).host) && S(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                    };
                    return c
                }($a),
                hu = x(function(a) {
                    var c = n(a, "sessionStorage");
                    if (!c) return null;
                    try {
                        var b = c.getItem("__ym_tab_guid");
                        c = !1;
                        var d = n(a, "opener.sessionStorage");
                        try {
                            c = !!d && b === d.getItem("__ym_tab_guid")
                        } catch (e) {
                            c = !0
                        }
                        if (!b || c) b = Xh(), a.sessionStorage.setItem("__ym_tab_guid", b);
                        return b
                    } catch (e) {
                        return null
                    }
                }),
                iu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.je = b.L.J(b.je, "ps");
                        return b
                    }
                    Ka(c, a);
                    c.prototype.start =
                        function() {
                            this.G.ta().yc({
                                nodes: [this.l.document.documentElement],
                                Tc: this.je
                            })
                        };
                    c.prototype.je = function(b) {
                        var d = this.G.qh(),
                            e = d.hh(),
                            f = S(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = Tc(this.l),
                            l = k[0];
                        k = k[1];
                        this.G.X("page", {
                            content: A(function(m) {
                                m.node = void 0;
                                return m
                            }, b),
                            base: e || "",
                            hasBase: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.l.document.title,
                            doctype: d.jh() || "",
                            address: this.l.location.href,
                            ua: this.l.navigator.userAgent,
                            referrer: this.l.document.referrer,
                            screen: {
                                width: this.l.screen.width,
                                height: this.l.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            recordStamp: this.G.$e(),
                            tabId: hu(this.l)
                        }, "page", 0)
                    };
                    return c
                }($a),
                ju = ["addRule", "removeRule", "insertRule", "deleteRule"],
                qh = [
                    [function(a) {
                        function c(b, d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.bb = {};
                            b.Wb = {};
                            b.He = 0;
                            b.Jc = b.L.J(b.Jc, "a");
                            b.xb = b.L.J(b.xb, "sr");
                            b.Kc = b.L.J(b.Kc, "r");
                            b.da = b.L.J(b.da, "d");
                            return b
                        }
                        Ka(c, a);
                        c.prototype.start = function() {
                            var b = this.G.ta();
                            b.F("style", "NA:", this.Jc);
                            b.F("style", "NR:", this.Kc);
                            this.da()
                        };
                        c.prototype.stop =
                            function() {
                                var b = this;
                                a.prototype.stop.call(this);
                                var d = this.G.ta();
                                d.ja("style", "NA:", this.Jc);
                                d.ja("style", "NR:", this.Kc);
                                this.da();
                                pa(this.l, this.He);
                                y(function(e) {
                                    b.bb[e].sheet && b.Gf(b.bb[e].sheet)
                                }, ea(this.bb));
                                this.bb = {}
                            };
                        c.prototype.da = function() {
                            var b = this;
                            y(function(d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.stamp;
                                        delete l.stamp;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && y(function(p) {
                                        b.G.X("event", {
                                            target: Fa(e),
                                            changes: p
                                        }, "stylechange", g)
                                    }, h);
                                    delete b.Wb[e]
                                }
                            }, Ea(this.Wb));
                            this.He = W(this.l, this.da, 100)
                        };
                        c.prototype.xb = function(b, d, e, f, g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.Wb[b] || (this.Wb[b] = []);
                            this.Wb[b].push({
                                op: d,
                                style: f,
                                index: g,
                                stamp: e
                            })
                        };
                        c.prototype.oi = function(b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            U(f) && (b.addRule = function(l, m, p) {
                                e.xb(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                                return f.call(b, l, m, p)
                            });
                            U(g) && (b.removeRule = function(l) {
                                e.xb(d, "r", e.G.stamp(), "", l);
                                return g.call(b,
                                    l)
                            });
                            U(h) && (b.insertRule = function(l, m) {
                                e.xb(d, "a", e.G.stamp(), l, m);
                                return h.call(b, l, m)
                            });
                            U(k) && (b.deleteRule = function(l) {
                                e.xb(d, "r", e.G.stamp(), "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.Gf = function(b) {
                            var d = this;
                            y(function(e) {
                                var f = d.l.CSSStyleSheet.prototype[e];
                                U(f) && (b[e] = G(f, b))
                            }, ju)
                        };
                        c.prototype.Ug = function(b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.Jc = function(b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.Ug(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h < f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        op: "a"
                                    });
                                    this.G.X("event", {
                                        changes: g,
                                        target: b
                                    }, "stylechange")
                                }
                                this.oi(e, b);
                                this.bb[b] = d
                            }
                        };
                        c.prototype.Kc = function(b) {
                            b = b.data.id;
                            var d = this.bb[b];
                            d && (delete this.bb[b], d.sheet && this.Gf(d.sheet))
                        };
                        return c
                    }($a), "ss"],
                    [Jt, "in"],
                    [Gt, "mu"],
                    [Kt, "r"],
                    [Lt, "sc"],
                    [Nt, "mo"],
                    [Pt, "f"],
                    [Ut, "se"],
                    [Wt, "wf"],
                    [Yt, "t"],
                    [Zt, "src"],
                    [$t, "z"],
                    [eu, "ks"]
                ];
            qh.push([gu, "if"]);
            qh.push([iu, "pa"]);
            var ku = x(function(a) {
                    var c = a.document;
                    return {
                        zd: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
                            return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                        },
                        ph: function() {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = wb(w(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                            return n(b, d + ".angle") || 0
                        },
                        tj: w(a, db),
                        ff: w(a, pd),
                        sj: w(a, Oe)
                    }
                }),
                lu = function() {
                    function a(c, b) {
                        var d = this;
                        this.Mb = 0;
                        this.ld = [];
                        this.Lb = null;
                        this.wa = this.Yb = this.Uf = !1;
                        this.recordStamp = 0;
                        this.qh = function() {
                            return d.page
                        };
                        this.wd = function() {
                            return d.Mb
                        };
                        this.$e = function() {
                            return d.recordStamp
                        };
                        this.nh = function() {
                            return d.hb
                        };
                        this.Ze = function() {
                            return d.Lb
                        };
                        this.ta = function() {
                            return d.Fd
                        };
                        this.stamp = function() {
                            return d.se ? d.l.Math.max(d.se(aa) - d.recordStamp, 0) : 0
                        };
                        this.Jb = function() {
                            return d.options
                        };
                        this.mb = function() {
                            return d.xg
                        };
                        this.X = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            f = d.mh(f, g, h, k);
                            d.da(f)
                        };
                        this.mh = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            return {
                                type: f,
                                data: g,
                                stamp: k,
                                frameId: d.Mb,
                                event: h
                            }
                        };
                        this.da = function(f) {
                            f = ca(f) ? f : [f];
                            d.Uf &&
                                !d.Yb ? d.wa ? (f = A(function(g) {
                                    return g.frameId ? g : z(g, {
                                        frameId: d.Mb
                                    })
                                }, f), d.Ze().Mf(f)) : d.Tb(f) : d.ld = d.ld.concat(f)
                        };
                        this.l = c;
                        var e = Cf(c, this, "R");
                        this.oe = e.J(this.oe, "s");
                        this.da = e.J(this.da, "sd");
                        e = I(c);
                        e.C("wv2e") && $d();
                        e.D("wv2e", !0);
                        this.options = b;
                        this.hb = ja(c);
                        this.Fd = new Ht(this.l, b);
                        this.xg = ku(c);
                        this.Ie = A(function(f) {
                            return new f[0](c, d, f[1])
                        }, qh);
                        this.Kh();
                        this.page = pn(this.l);
                        this.oe()
                    }
                    a.prototype.start = function(c) {
                        this.Uf = !0;
                        this.Tb = c;
                        this.Jf()
                    };
                    a.prototype.stop = function() {
                        ph(this.l) && (y(function(c) {
                                return c.stop()
                            },
                            this.Ie), this.Fd.stop(), this.Lb && this.Lb.stop(), this.wa || this.X("event", {}, "eof"))
                    };
                    a.prototype.kc = function(c, b) {
                        var d = new a(c, z({}, this.options, {
                            frameId: b
                        }));
                        d.start(C);
                        return d
                    };
                    a.prototype.Kh = function() {
                        var c = this;
                        this.wa = !!this.options.frameId;
                        this.Mb = this.options.frameId || 0;
                        this.Yb = !this.wa;
                        var b = this.options.cg || [];
                        b.push(S(this.l).host);
                        this.Lb = qn(this.l, this, b);
                        b = this.Lb.vd();
                        db(this.l) ? this.Yb && b.F(["i"], function(d) {
                            c.wa = d.wa;
                            c.Yb = !1;
                            d.frameId && (c.Mb = d.frameId);
                            c.Jf()
                        }) : this.Yb = this.wa = !1
                    };
                    a.prototype.Jf = function() {
                        var c = Ed(this.ld);
                        this.da(c)
                    };
                    a.prototype.oe = function() {
                        this.se = gg(this.l);
                        this.recordStamp = this.se(aa);
                        y(function(c) {
                            c.start()
                        }, this.Ie);
                        this.Fd.start()
                    };
                    return a
                }(),
                mu = function() {
                    return function(a, c, b) {
                        var d = this;
                        this.cd = this.Qb = !1;
                        this.Wa = [];
                        this.sf = [];
                        this.Le = [];
                        this.send = function(e, f, g) {
                            e = d.sender(e, d.jc);
                            f && g && e.then(f, g);
                            return e
                        };
                        this.qe = function(e, f, g) {
                            return new J(function(h, k) {
                                e.push([f, h, k, g])
                            })
                        };
                        this.Ch = function() {
                            d.Wa = Fg(function(g, h) {
                                    return g[3].partNum - h[3].partNum
                                },
                                d.Wa);
                            var e = M(function(g, h, k) {
                                    h = h[3];
                                    return g && k + 1 === h.partNum
                                }, !0, d.Wa),
                                f = !!d.Wa[d.Wa.length - 1][3].end;
                            return e && f
                        };
                        this.qd = function(e) {
                            xh(d.l, e.slice(), function(f) {
                                d.send(f[0], f[1], f[2])
                            }, 20, "s.w2.sf.fes");
                            Ed(e)
                        };
                        this.Zg = function() {
                            d.cd || (d.cd = !0, d.qd(d.sf), d.qd(d.Le))
                        };
                        this.Eg = function(e) {
                            return M(function(f, g) {
                                var h = "page" === g.type && !g.frameId,
                                    k = "eof" === g.data.type,
                                    l = h && !!g.partNum;
                                return {
                                    gd: f.gd || l,
                                    fd: f.fd || h,
                                    ed: f.ed || k
                                }
                            }, {
                                fd: !1,
                                ed: !1,
                                gd: !1
                            }, e)
                        };
                        this.Ah = function(e, f, g) {
                            g ? (e = d.qe(d.Wa, e, f[0]),
                                d.Ch() && (d.qd(d.Wa), d.Qb = !0)) : (d.Qb = !0, e = d.send(e));
                            return e
                        };
                        this.af = function(e, f, g) {
                            var h;
                            f = {
                                H: (h = {}, h["wv-part"] = "" + g, h),
                                K: Ja(),
                                aa: {
                                    ca: f
                                },
                                Za: {
                                    hf: d.Lh
                                }
                            };
                            e && f.K.D("bt", 1);
                            return f
                        };
                        this.Sg = function(e, f, g) {
                            e = d.af(!1, e, g);
                            return d.Qb ? d.send(e) : d.qe(d.Le, e, f)
                        };
                        this.Xh = function(e, f, g) {
                            e = d.af(!0, e, g);
                            if (d.Qb) return d.send(e);
                            var h = d.Eg(f);
                            g = h.fd;
                            var k = h.ed;
                            h = h.gd;
                            var l;
                            g && (l = d.Ah(e, f, h));
                            d.cd ? g || (l = d.send(e)) : (g || (l = d.qe(d.sf, e, f)), (d.Qb || k) && d.Zg());
                            return l
                        };
                        this.l = a;
                        this.Lh = b;
                        this.sender = ta(a, "W",
                            c);
                        this.jc = c
                    }
                }(),
                yl = x(function(a) {
                    var c = I(a),
                        b = c.C("isEU");
                    if (V(b)) {
                        var d = Fa(ne(a, "is_gdpr") || "");
                        if (L(d, [0, 1])) c.D("isEU", d), b = !!d;
                        else if (a = Na(a).C("wasSynced"), a = n(a, "params.eu")) c.D("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return I(a).C("isEU")
                }),
                xf = E("i.e", yl),
                nu = E("i.ep", function(a) {
                    yl(a)
                }),
                fa, ou = (fa = {}, fa.mousemove = 0, fa.mouseup = 1, fa.mousedown = 2, fa.click = 3, fa.scroll = 4, fa.windowblur = 5, fa.windowfocus = 6, fa.focus = 7, fa.blur = 8, fa.eof = 9, fa.selection = 10, fa.change = 11, fa.input = 12, fa.touchmove = 13, fa.touchstart =
                    14, fa.touchend = 15, fa.touchcancel = 16, fa.touchforcechange = 17, fa.canvasMethod = 18, fa.canvasProperty = 19, fa.zoom = 20, fa.resize = 21, fa.mediaMethod = 22, fa.mediaProperty = 23, fa.keystroke = 24, fa.deviceRotation = 25, fa.fatalError = 26, fa.hashchange = 27, fa.stylechange = 28, fa),
                rh = la(function(a, c) {
                    var b;
                    return b = {}, b[a] = c, b
                }),
                Zd = ["touchEvent", "touches", "touches"],
                Vh = function() {
                    function a(c) {
                        var b, d, e = this;
                        this.isSync = !1;
                        this.Gb = [];
                        this.Ne = {};
                        this.lh = function(f) {
                            if (f = e.Ne[f]) return ca(f) ? {
                                rf: f[0],
                                ui: f[1],
                                vi: f[2]
                            } : {
                                rf: f
                            }
                        };
                        this.l = c;
                        this.nf = (b = {}, b.event = G(this.Rg, this), b.page = rh("page"), b.mutation = rh("mutation"), b.activity = rh("activity"), b);
                        this.Ne = (d = {}, d.scroll = "scrollEvent", d.selection = "selectionEvent", d.change = "changeEvent", d.input = "changeEvent", d.keystroke = ["keystrokesEvent", "keystrokes"], d.zoom = "zoomEvent", d.resize = "resizeEvent", d.windowfocus = "windowEvent", d.windowblur = "windowEvent", d.focus = "windowEvent", d.blur = "windowEvent", d.eof = "windowEvent", d.mousemove = "mouseEvent", d.mouseup = "mouseEvent", d.mousedown = "mouseEvent",
                            d.click = "mouseEvent", d.deviceRotation = "deviceRotationEvent", d.fatalError = "fatalErrorEvent", d.touchmove = Zd, d.touchstart = Zd, d.touchend = Zd, d.touchcancel = Zd, d.touchforcechange = Zd, d.hashchange = "hashchangeEvent", d.stylechange = ["stylechangeEvent", "changes", "changes"], d)
                    }
                    a.isEnabled = function(c) {
                        return li(c)
                    };
                    a.prototype.Rg = function(c) {
                        var b, d, e = c.type,
                            f = this.lh(e);
                        f || Ta(mc("vem." + e));
                        "eof" === e && (this.isSync = !0);
                        var g = f.rf,
                            h = f.ui;
                        f = f.vi;
                        var k = c.meta;
                        return {
                            event: (b = {
                                    type: ou[e],
                                    target: c.target,
                                    frameId: c.frameId
                                },
                                b[g] = h ? (d = {}, d[h] = f ? k[f] : k, d) : k, b)
                        }
                    };
                    a.prototype.Ca = function(c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = nc(c, function(h) {
                                var k = !V(h.partNum);
                                return {
                                    data: k ? void 0 : d.nf[h.type](h.data),
                                    Gg: k ? h.data : void 0,
                                    page: h.partNum,
                                    end: h.end,
                                    stamp: h.stamp
                                }
                            }),
                            f = this.isSync || b ? Infinity : 10;
                        e = oc(this.l, e, f);
                        var g = [e];
                        this.Gb.push(e);
                        return e(Xe(function(h) {
                            h = oe(d.l, mi, {
                                buffer: h
                            });
                            h = oc(d.l, h, f, Me);
                            g.push(h);
                            d.Gb.push(h);
                            return h
                        }))(Xe(function(h) {
                            h = Lf(d.l, h.slice(-4));
                            h = oc(d.l, h, f, Me);
                            g.push(h);
                            d.Gb.push(h);
                            return h
                        }))(Yg(function(h) {
                            h =
                                h[h.length - 1];
                            y(function(k) {
                                k = Ae(d.l)(k, d.Gb);
                                d.Gb.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.eb = function(c) {
                        return oe(this.l, Of, this.nf[c.type](c.data))(Ne(C))
                    };
                    a.prototype.Ra = function(c) {
                        return c[0]
                    };
                    a.prototype.Vc = function(c, b) {
                        for (var d = Lf(this.l, c)(Ne(C)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                        return f
                    };
                    return a
                }(),
                pu = E("w2", function(a, c) {
                    function b() {
                        h = !0
                    }
                    var d = I(a),
                        e = N(c);
                    if (!c.Ab || fd(a) || !a.MutationObserver || !Aa("Element", a.Element)) return C;
                    Aa("MutationObserver",
                        a.MutationObserver) || Dd(a, e).warn("MutationObserver is overridden, webvisor is not guaranteed to work in this environment");
                    var f = va(function(k, l) {
                            qa(c, l)["catch"](k)
                        }),
                        g = Qb(a)(Xe(F([a, c], nn)))(Yg(function(k) {
                            return new lu(a, k)
                        })),
                        h = !1;
                    Sq([g, f])(Ra(D(a, "wv2.R.c"), function(k) {
                        var l = k[0];
                        k = k[1];
                        if (!h) {
                            b = function() {
                                h || (h = !0, l && l.stop())
                            };
                            var m = d.C("wv2Counter");
                            if (!Zh(a, k) || m) b();
                            else if (ja(a).F(a, ["beforeunload", "unload"], b), d.D("wv2Counter", e), d.D("stopRecorder", b), k = mn(a)) {
                                var p = !(k instanceof Hc);
                                m = new mu(a, c, p);
                                var q = vl.We(e, "m", G(m.Xh, m), k, a),
                                    r = vl.We(e, "e", G(m.Sg, m), k, a);
                                k = on();
                                m = k.ei;
                                r.F("ag", k.vg);
                                r.F("p", m);
                                q.F("see", function(t) {
                                    var B = !1;
                                    y(function(Q) {
                                        "page" === Q.type && (B = !0)
                                    }, t);
                                    B && (h || r.push({
                                        type: "event",
                                        data: {
                                            type: "fatalError",
                                            meta: {
                                                code: "invalid-snapshot",
                                                Tg: "p.s.f",
                                                stack: ""
                                            }
                                        }
                                    }), b())
                                });
                                var u = gb(function(t) {
                                    t = p ? kn(t) : t;
                                    "eof" === n(t, "data.type") ? (r.push(t), q.push(t), r.flush(), q.flush()) : ("event" === t.type ? r : q).push(t)
                                });
                                W(a, b, 864E5);
                                Lb(a, function() {
                                    var t, B;
                                    mb(a, (t = {}, t.counterKey = e, t.name =
                                        "webvisor", t.data = (B = {}, B.version = 2, B), t));
                                    l.start(u)
                                })
                            }
                        }
                    }));
                    return function() {
                        return b()
                    }
                }),
                qu = E("w2.cs", function(a, c) {
                    var b, d = N(c);
                    cg(a, d, (b = {}, b.webvisor = !!c.Ab, b))
                }),
                zl = x(Cc, N),
                Uh = v(hd, sc),
                Al = C,
                ru = pb("isp.stat", function(a, c) {
                    return new J(function(b, d) {
                        if (Fq(a, ll, "isp")) {
                            var e = function(f) {
                                ("1" === f ? b : d)();
                                Al();
                                f = Gj(ll);
                                L("isp", f.ub) && (f.ub = Z(v(oa("isp"), Wb), f.ub), f.ub.length || (rc(f.lb), f.lb = null))
                            };
                            Al = ja(a).F(a, ["message"], F([c, e], D(a, "isp.stat.m", jn)));
                            W(a, e, 1500)
                        } else d()
                    })
                }),
                su = pb("isp", function(a,
                    c) {
                    qa(c, function(b) {
                        var d = wb(function(g) {
                            return n(b, "settings." + g)
                        }, ["rt", "mf"]);
                        if (d && Sd(a)) {
                            var e = nf(b) && !fe(a),
                                f = zl(c);
                            z(f, {
                                Mc: d,
                                status: e ? 3 : 4
                            });
                            if (!e) return d = hn(a, c, d), e = function(g) {
                                f.status = g
                            }, ru(a, d).then(w(1, e))["catch"](w(2, e))
                        }
                    })["catch"](D(a, "l.isp"))
                }),
                Bl = E("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g = Da(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        z(e, d);
                        b && y(c, b);
                        a.fbq = e
                    } else var f = W(a, F([a, c, za(Ba(d && d.queue))], Bl), 1E3, "fbq.d");
                    return G(pa, null,
                        a, f)
                }),
                ad, Db, bd, sh = (ad = {}, ad.add_to_wishlist = "add-to-wishlist", ad.begin_checkout = "begin-checkout", ad.generate_lead = "submit-lead", ad.add_payment_info = "add-payment-info", ad),
                th = (Db = {}, Db.AddToCart = "add-to-cart", Db.Lead = "submit-lead", Db.InitiateCheckout = "begin-checkout", Db.Purchase = "purchase", Db.CompleteRegistration = "register", Db.Contact = "submit-contact", Db.AddPaymentInfo = "add-payment-info", Db.AddToWishlist = "add-to-wishlist", Db.Subscribe = "subscribe", Db),
                fn = (bd = {}, bd["1"] = sh, bd["2"] = sh, bd["3"] = sh, bd["0"] =
                    th, bd),
                gn = [th.AddToCart, th.Purchase],
                tu = la(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                            version: "3",
                            pc: d
                        })) a: {
                        if (ca(c) || Pa(c))
                            if (b = Da(c), d = b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    pc: d
                                };
                                break a
                            }
                        b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        pc: H(",", ea(b))
                    });
                    b && a(b)
                }),
                uu = E("ag.e", function(a, c) {
                    var b = [],
                        d = D(a, "ag.s", F([ha, b], y));
                    "0" === c.Z && qa(c, function(e) {
                        if (n(e, "settings.auto_goals") && Ha(a, c) && (e = ve(a, c, "autogoal").reachGoal)) {
                            e = F([e, c.od], en);
                            var f = tu(e);
                            e = F([a, e], dn);
                            b.push(Bl(a, e));
                            b.push(Wi(a, "dataLayer", function(g) {
                                g.za.F(f)
                            }))
                        }
                    });
                    return d
                }),
                vu = /[^\d.,]/g,
                wu = /[.,]$/,
                bn = E("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(vu, "").replace(wu, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (L(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(Pb(b[0]) + "." + Pb(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                xu = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD",
                            "\u0423\\.\u0415\\.", "\\$"
                        ], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                yu = x(function(a) {
                    return new RegExp(a.join("|"), "i")
                }),
                zu = E("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = Mi(a);
                    return (a = wb(function(b) {
                            return yu(b[0]).test(c)
                        },
                        xu)) ? a[1] : "643"
                }),
                Au = x(function() {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h + "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = Sh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
                            e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                Zm = E("ep.dec", function(a, c) {
                    if (!c || fd(a)) return [];
                    var b = Sh(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== Vg(b[0])) return [];
                    b = Au();
                    f = f.join("");
                    e = Vg(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(Vg(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = Hb(a, b);
                    return ca(d) ? A(or, d) : []
                }),
                an = E("ep.ent", function(a, c, b) {
                    a = "" + Wa(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Pa(b)) return "";
                    b = Th("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                Cl = v(Rh, zu),
                Dl = E("ep.ctp", function(a, c, b, d) {
                    var e = Cl(a, b),
                        f = Qh(a, d);
                    Ph(a, c, e, f);
                    Aa("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = Cl(a, b),
                            h = Qh(a, d);
                        if (e !== g || f !== h) e = g, f = h, Ph(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                Bu = E("ep.chp", function(a, c, b, d, e) {
                    b && vf(a, c);
                    return d || e ? ja(a).F(a.document, ["click"], D(a, "ep.chp.cl", F([a, c, d, e], $m))) : C
                }),
                Fu = E("ep.i", function(a, c) {
                    return Jd(a) ? Ym(a, c).then(function(b) {
                        var d = b.Og,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            q = d[8],
                            r = d[9],
                            u = d[10],
                            t = d[11],
                            B = d[12],
                            Q = d[13],
                            O = d[14],
                            ka = d[15];
                        if (!b.isEnabled) return J.resolve(C);
                        var wa = ie(a, e),
                            yb = ie(a, h),
                            vd = ie(a, m),
                            ue = ie(a, q),
                            Cu = "" + e + f + g === "" + h + k + l;
                        return new J(function(Du,
                            Eu) {
                            Qb(a)(Ra(Eu, function() {
                                wa && Dl(a, c, f, g, u, t, B);
                                yb && !Cu && Dl(a, c, k, l, Q, O, ka);
                                Du(Bu(a, c, vd || ue, p, r))
                            }))
                        })
                    }) : J.resolve(C)
                }),
                Gm = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                Xm = v(ea, Oc),
                Gu = E("cc.i", function(a, c) {
                    var b = F([a, c], Wm);
                    b = F([a, b, 300, void 0], W);
                    qa(c, b)
                }),
                Hu = w("9-d5ve+.r%7", P),
                Iu = E("ad", function(a, c) {
                    if (!c.tb) {
                        var b = I(a);
                        if (!b.C("adBlockEnabled")) {
                            var d = function(m) {
                                    L(m, ["2", "1"]) && b.D("adBlockEnabled", m)
                                },
                                e = Nb(a),
                                f = e.C("isad");
                            if (f) d(f);
                            else {
                                var g = w("adStatus", b.D),
                                    h =
                                    function(m) {
                                        m = m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.D("isad", m, 1200);
                                        return m
                                    },
                                    k = ta(a, "adb", c);
                                if (!b.C("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + Hu().replace(/[^a-v]+/g, "") + "t.gif";
                                    Tm(a, function() {
                                        return k({
                                            ga: {
                                                Ba: l
                                            }
                                        }).then(w(!1, h))["catch"](w(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                Ju = E("pr.p", function(a, c) {
                    var b, d;
                    if (xg(a)) {
                        var e = ta(a, "5", c),
                            f = Ja((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            K: f,
                            H: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](D(a, "pr.p.s"))
                    }
                }),
                Oh = !1,
                Ku = E("fid", function(a) {
                    var c, b = C;
                    if (!U(a.PerformanceObserver)) return b;
                    var d = I(a);
                    if (d.C("fido")) return b;
                    d.D("fido", !0);
                    var e = new a.PerformanceObserver(D(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                Mh = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1,
                    3015043526: 1
                },
                Lu = E("lt.p", pb("lt.p", function(a) {
                    var c;
                    if (Aa("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(D(a, "lt.o", function(e) {
                                e && e.getEntries && (e = e.getEntries(), b = M(function(f, g) {
                                    return f + g.duration
                                }, b, e), Pd(a).D("lt", b))
                            }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return C
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                    return C
                })),
                Mu = x(v(Y("performance.memory.jsHeapSizeLimit"), sa("concat", ""))),
                Nu = ["availWidth", "availHeight", "availTop"],
                Ou = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                Pu = ["webgl", "experimental-webgl"],
                Qm = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                qf = w(Sa("ccf"), Ta),
                Pm = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                Lh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                Nm = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                Im = x(Hi),
                Kh = x(Hb, qb),
                Qu = E("phc.p", function(a, c) {
                    if (!dl(a)) return qa(c, function(b) {
                        var d = c.id,
                            e = ed(a, void 0, d),
                            f = e.C("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g = kb(a, b) || "";
                            g !== f && e.D("phc_settings", g)
                        } else f && (b = Kh(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                            Eb: "",
                            Pb: "",
                            Sf: 0,
                            ma: {},
                            Aa: [],
                            jf: !1,
                            jb: !0,
                            l: a,
                            jc: c
                        }, z(f, {
                            jf: !0
                        }), Jh(a, d, f), b = xd(a), e = Ji(a, b, 1E3), d = G(Jh, null, a, d, f), e.F(d), Ki(a, b))
                    })
                }),
                uh = x(function(a, c) {
                    var b = I(a),
                        d = Na(a),
                        e = [],
                        f = F([a, c, b, d], pp);
                    qd(a) || qp(a, "14.1") || e.push(F([Fm, "pp", ""], f));
                    var g = fl(a) && ! of (a, 68);
                    g || e.push(F([Hm, "pu", ""], f));
                    g || d.Hd || Sd(a) || (e.push(F([Em, "zzlc", "na"], f)), e.push(F([Dm, "cc", ""], f)));
                    return e.length ? {
                        ra: function(h, k) {
                            if (0 === b.C("isEU")) try {
                                y(Yf, e)
                            } catch (l) {}
                            k()
                        },
                        M: function(h, k) {
                            var l = h.K;
                            if (l && 0 === b.C("isEU")) try {
                                y(va(l),
                                    e)
                            } catch (m) {}
                            k()
                        }
                    } : {}
                }, function(a, c) {
                    return N(c)
                }),
                Ru = v(function(a) {
                    a = n(a, "navigator.plugins") || [];
                    return Pa(a) ? v(Ba, Oa, Mr(function(c, b) {
                        return c.name > b.name ? 1 : 2
                    }), gb(mp))(a) : ""
                }, rd(",")),
                Su = function(a) {
                    return function(c) {
                        var b = ab(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.Vg;
                        e = e.Mg;
                        try {
                            var g = sa("getContext", b);
                            d = A(v(P, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = wb(P, d)) ? f(c, {
                            canvas: b,
                            Bg: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Mg: Pu,
                        Vg: zm
                    }
                }),
                wm = ["name", "lang", "localService", "voiceURI", "default"],
                Tu = E("p.tfs", function(a) {
                    var c =
                        I(a);
                    if (!c.C("tfs")) {
                        c.D("tfs", !0);
                        c = ja(a);
                        var b = C;
                        b = c.F(a, ["message"], function(d) {
                            try {
                                var e = d.origin
                            } catch (h) {}
                            if (e && "https://iframe-toloka.com" === e && (d = Hb(a, d.data), ra(d) && "appendremote" === d.action))
                                if (d = Na(a), d.C("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                    d.D("tfsc",
                                        1);
                                    var f, g;
                                    I(a).D("_u", (f = {}, f.getCachedTags = Tf, f.button = (g = {}, g.closest = w(a, Uf), g.select = Vf, g.getData = w(a, Wf), g), f));
                                    pc(a, {
                                        src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js"
                                    });
                                    b()
                                } else a.close()
                        })
                    }
                }),
                Uu = Ya(/[a-z\u0430-\u044f,.]/gi),
                Vu = E("ice", function(a, c, b) {
                    var d = Ha(a, c);
                    if (d) {
                        var e = n(b, "target");
                        if (e && (c = n(e, "value"), (c = nb(c)) && !(100 <= Pa(c)))) {
                            var f = Pb(c),
                                g = 0 < c.indexOf("@"),
                                h = "tel" === n(e, "type") || !g && Pa(f);
                            if (g || h) {
                                if (h) {
                                    if (Uu(c)) return;
                                    h = c[0];
                                    var k = f[0];
                                    if (h !== k &&
                                        "+" !== h) return;
                                    var l = c[1];
                                    if ("+" === h && l !== k) return;
                                    c = c[Pa(c) - 1];
                                    h = f[Pa(f) - 1];
                                    if (c !== h) return;
                                    c = f
                                }
                                f = g ? 5 : 11;
                                h = g ? 100 : 16;
                                if (!(Pa(c) < f || Pa(c) > h)) {
                                    var m = n(b, "isTrusted");
                                    lj(a, c).then(function(p) {
                                        var q, r, u, t, B = sg(a, e);
                                        d.params((q = {}, q.__ym = Jg((r = {}, r.fi = wg((u = {}, u.a = g ? 1 : 0, u.b = B, u.c = p, u)).Ca(), r), ia(m) ? {} : (t = {}, t.ite = Gb(m), t)), q))
                                    }, D(a, "ice.s"))
                                }
                            }
                        }
                    }
                }),
                Wu = ["text", "email", "tel"],
                Xu = ["cc-", "name", "shipping"],
                Yu = E("icei", function(a, c) {
                    if (Jd(a) && bl(a)) {
                        var b = !1,
                            d = [];
                        Qb(a)(Ra(C, F([c, function(e) {
                            var f = n(e, "settings.cf");
                            e = xf(a) || n(e, "settings.eu");
                            if (f && !e && !b) {
                                var g = ja(a);
                                f = ob("input", a.document.body);
                                y(function(h) {
                                    Gf(a, h) || !L(h.type, Wu) || Ma(P, A(w(h.autocomplete, Fb), Xu)) || d.push(g.F(h, ["blur"], F([a, c], Vu)))
                                }, f)
                            }
                        }], qa)));
                        return function() {
                            y(ha, d);
                            b = !0
                        }
                    }
                }),
                Gh, Zu = E("p.ai", function(a, c) {
                    if (qd(a) || gf(a)) return qa(c, function(b) {
                        var d;
                        if (b = n(b, "settings.sbp")) return Fh(a, z({}, b, (d = {}, d.c = c.id, d)), 10)
                    })
                }),
                $u = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
                El = pb("uah", function(a) {
                    if (!Aa("getHighEntropyValues",
                            n(a, "navigator.userAgentData.getHighEntropyValues"))) return J.reject("0");
                    try {
                        return a.navigator.userAgentData.getHighEntropyValues($u).then(function(c) {
                            if (!ra(c)) throw "2";
                            return c
                        }, function() {
                            throw "1";
                        })
                    } catch (c) {
                        return J.reject("3")
                    }
                }),
                Fl = new RegExp(H("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                    "\\$&")),
                mm = x(function(a) {
                    var c = fb(a);
                    return (c = Fl.test(c)) ? J.resolve(c) : El(a).then(function(b) {
                        try {
                            return M(function(d, e) {
                                return d || Fl.test(e.brand)
                            }, !1, b.brands)
                        } catch (d) {
                            return !1
                        }
                    }, w(!1, P))
                }),
                $b = ["0", "1", "2", "3"],
                Fc = $b[0],
                ff = $b[1],
                av = $b[2],
                kf = A(v(P, sa("concat", "GDPR-ok-view-detailed-")), $b),
                ee = za("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), kf, ["28", "29", "30"]),
                bv = "3 13 14 15 16 17 28".split(" "),
                jf = v(gb(Y("ymetrikaEvent.type")), Ug(yc(ee))),
                tm = {
                    Th: !0,
                    url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                    xf: "",
                    pf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
                },
                Zb, sm = (Zb = {}, Zb["GDPR-ok"] = "ok", Zb["GDPR-ok-view-default"] = "ok-default", Zb["GDPR-ok-view-detailed"] = "ok-detailed", Zb["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Zb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Zb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Zb["GDPR-ok-view-detailed-3"] =
                    "ok-detailed-tech-other", Zb),
                km = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
                ge = [],
                Bh = v(jf, gb(Lr(ee)), rd(",")),
                Ch = v(Ug(yc(ee)), Pa, Boolean),
                jm = x(function(a, c) {
                    var b = c.C("gdpr");
                    return L(b, $b) ? "-" + b : ""
                }),
                dd = {},
                Gl = x(Cc),
                gm = v(sa("exec", /counterID=(\d+)/), Y("1")),
                Hl = la(function(a, c) {
                    var b = Gl(a),
                        d = Ba(c),
                        e = d[0],
                        f = d[1],
                        g = d.slice(2);
                    if (f) {
                        d = fm(a, e);
                        var h = d[0],
                            k = d[1];
                        d = N(k);
                        b[d] || (b[d] = {});
                        b = b[d];
                        c.Oe || dd[f] && M(function(l, m) {
                            return l || !!m(a, k, g, h)
                        }, !1, dd[f]) || ("init" ===
                            f ? (c.Oe = !0, h ? vb(a, "" + e, "Duplicate counter " + e + " initialization") : a["yaCounter" + k.id] = new a.Ya[ua.fc](z({}, g[0], k))) : h && h[f] && b.Jh ? (h[f].apply(h, g), c.Oe = !0) : (d = b.Tf, d || (d = [], b.Tf = d), d.push(za([e, f], g))))
                    }
                }),
                cv = pb("is", function(a) {
                    var c = Nb(a);
                    if (Ce(a, "0")) c.Hb("debug_build");
                    else {
                        var b = Ce(a, "2"),
                            d = c.C("debug_build") === ua.fb;
                        if (b || d) return c.D("debug_build", ua.fb), pc(a, {
                            src: kl + "/tag_debug.js"
                        })
                    }
                });
            "function" == typeof Promise && Promise.resolve();
            Oa([void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0,
                void 0
            ]);
            var Il = x(wd),
                dv = x(function() {
                    var a = M(function(c, b) {
                        "ru" !== b && (c[b] = jl + "." + b);
                        return c
                    }, {}, pg);
                    y(function(c) {
                        a[c] = c
                    }, ea(ml));
                    a["mc.webvisor.org"] = "mc.webvisor.org";
                    return a
                }),
                $l = x(function(a) {
                    a = S(a).hostname;
                    return (a = wb(v(Y("1"), Ii("test"), Bb(ha)(a)), Ea(ml))) && a[0]
                }),
                Jl = function(a, c) {
                    return function(b, d) {
                        var e = N(d);
                        e = dv(e);
                        var f = Yl(b, e),
                            g = I(b),
                            h = db(b);
                        return Sd(b) || Md(b) ? {} : {
                            M: function(k, l) {
                                var m = k.K;
                                m = !(m && m.C("pv"));
                                if (h || m || !f.length) return l();
                                if (g.C("startSync")) Il(b).push(l);
                                else {
                                    g.D("startSync", !0);
                                    m = F([b, f, C, !1], a);
                                    var p = hf[0];
                                    if (!p) return l();
                                    l();
                                    p(b).then(m).then(C, v(id(C), D(b, c)))["catch"](C)
                                }
                            }
                        }
                    }
                }(function(a, c, b, d) {
                    var e = da(a),
                        f = I(a),
                        g = Na(a);
                    b = eh(a, "c");
                    var h = Vb(a, b);
                    return M(function(k, l) {
                            function m() {
                                var r = g.C("synced");
                                f.D("startSync", !1);
                                r && (r[l.Vh] = p, g.D("synced", r));
                                r = Il(a);
                                y(ha, r);
                                Ed(r)
                            }
                            var p, q = h({
                                aa: {
                                    ha: ["sync.cook"],
                                    Na: 1500
                                }
                            }, [ua.Qa + "//" + l.Ei + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                                p = e(jb);
                                m()
                            })["catch"](function() {
                                p = e(jb) - 1435;
                                m()
                            });
                            q = w(q, P);
                            return k.then(q)
                        },
                        J.resolve(), c)["catch"](D(a, "ctl"))
                }, "sy.c"),
                Wl = la(function(a, c) {
                    var b = c.kd,
                        d = c.De,
                        e = c.cookie,
                        f = yh(c)[a];
                    f = Hg(f, d);
                    b !== f && (b = zh(e, d), b[f] += 1, Xl(b, c))
                }),
                ev = x(function(a) {
                    var c;
                    (c = n(a, "document.referrer")) ? (c = Ic(a, c).host, c = mj(c), c = jl + "." + (c || pt)) : c = dc;
                    c = ["mc.webvisor.org", c];
                    a = Nb(a);
                    return {
                        cookie: a,
                        De: c,
                        kd: c.length - 1,
                        Gh: zh(a, c)
                    }
                }),
                Vl = v(ev, va),
                Eb, Tl = (Eb = {}, Eb.brands = "chu", Eb.architecture = "cha", Eb.bitness = "chb", Eb.uaFullVersion = "chf", Eb.fullVersionList = "chl", Eb.mobile = "chm", Eb.model = "cho", Eb.platform =
                    "chp", Eb.platformVersion = "chv", Eb),
                fv = pb("ot", function(a, c) {
                    if (Ee(a)) return qa(c, D(a, "ot.s", function(b) {
                        if (n(b, "settings.oauth")) {
                            var d = [],
                                e = hd(a, c);
                            d.push(ja(a).F(a, ["message"], D(a, "ot.m", w(e, Ql))));
                            Qb(a)(Ra(C, D(a, "ot.b", function() {
                                function f(p) {
                                    var q = p.href;
                                    q && hh("https://oauth.yandex.ru/")(q) && !Fb(q, "_ym_uid=") && (q = Fb(q, "?") ? "&" : "?", p.href += q + "et=" + k + "&_ym_uid=" + e)
                                }
                                var g, h = a.document.body,
                                    k = da(a)(aa),
                                    l = ob("a", h);
                                y(f, l);
                                if (Aa("MutationObserver", a.MutationObserver)) {
                                    l = new a.MutationObserver(D(a,
                                        "ot.m", w(function(p) {
                                            p = p.addedNodes;
                                            for (var q = 0; q < p.length; q += 1) {
                                                var r = p[q];
                                                "A" === r.nodeName && f(r)
                                            }
                                        }, y)));
                                    var m = (g = {}, g.childList = !0, g.subtree = !0, g);
                                    l.observe(h, m);
                                    d.push(G(l.disconnect, l))
                                }
                            })));
                            return F([Yf, d], y)
                        }
                    }))
                }),
                Pl = E("destruct.e", function(a, c, b) {
                    return function() {
                        var d = I(a),
                            e = c.id;
                        y(function(f, g) {
                            return U(f) && D(a, "dest.fr." + g, f)()
                        }, b);
                        delete d.C("counters")[N(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                cd = I(window);
            cd.Ma("hitParam", {});
            cd.Ma("lastReferrer", window.location.href);
            (function() {
                X.push(function(a,
                    c) {
                    var b;
                    return b = {}, b.firstPartyParams = zs(a, c), b.firstPartyParamsHashed = cq(a, c), b
                });
                Ue.push("fpp", "fpmh")
            })();
            (function() {
                var a = I(window);
                a.Ma("getCounters", As(window));
                Ec.push(Bs);
                Xg.push(function(c, b) {
                    b.counters = a.C("getCounters")
                })
            })();
            (function() {
                X.push(function(a, c) {
                    var b;
                    mb(a, (b = {}, b.counterKey = N(c), b.name = "counter", b.data = fk(c), b))
                })
            })();
            Ca["1"] = ib;
            X.push(Cs);
            ya["1"] = kc;
            Cb(gj, -1);
            Sb["1"] = [
                [gj, -1],
                [Le, 1],
                [De, 2],
                [Kb(), 3]
            ];
            X.push(Ds);
            X.push(E("p.ar", function(a, c) {
                var b, d = ta(a, "a", c);
                return b = {}, b.hit = function(e, f, g, h, k, l) {
                    var m, p, q = {
                        H: {},
                        K: Ja((m = {}, m.pv = 1, m.ar = 1, m))
                    };
                    if (e) return f = ra(f) ? {
                        title: f.title,
                        Bf: f.referer,
                        ba: f.params,
                        ac: f.callback,
                        l: f.ctx
                    } : {
                        title: f,
                        Bf: g,
                        ba: h,
                        ac: k,
                        l: l
                    }, g = Cd(c), g.url !== e && (g.ref = g.url, g.url = e), e = e || S(a).href, g = f.Bf || g.ref || a.document.referrer, h = Jb(a, c, "PageView. Counter " + c.id + ". URL: " + e + ". Referrer: " + g, f.ba), k = z(q.V || {}, {
                        ba: f.ba,
                        title: f.title
                    }), q = d(z(q, {
                        V: k,
                        H: z(q.H || {}, (p = {}, p["page-url"] = e, p["page-ref"] = g, p))
                    }), c).then(h), Nc(a, "p.ar.s", q, f.ac || C, f.l)
                }, b
            }));
            Ca.a = ib;
            Sb.a = Tb;
            ya.a = al;
            X.push(ve);
            Ca.g = ib;
            ya.g = kc;
            Sb.g = Tb;
            X.push(Es);
            X.push(Fs);
            Sb.t = Tb;
            Ca.t = ib;
            ya.t = kc;
            X.push(Hs);
            Sb["2"] = Tb;
            Ca["2"] = ib;
            ya["2"] = kc;
            Ca.r = Kd("r");
            ya.r = al;
            ub.push(E("p.r", function(a, c) {
                var b = Js(a),
                    d = ta(a, "r", c),
                    e = D(a, "rts.p");
                return qa(c, F([function(f, g) {
                    var h = {
                            id: g.Jg,
                            Z: g.Z
                        },
                        k = {
                            aa: {
                                ca: g.ri
                            },
                            K: Ja(g.yg),
                            H: g.ba,
                            V: {
                                Rb: g.Rb
                            },
                            ga: {
                                Ba: g.Ba
                            }
                        };
                    g.Ha && (k.Ha = wg(g.Ha));
                    h = d(k, h)["catch"](e);
                    return f.then(w(h, P))
                }, J.resolve(), b], M))["catch"](e)
            }));
            ba("r", function(a) {
                return {
                    M: function(c, b) {
                        var d = c.K,
                            e = void 0 === d ? Ja() : d,
                            f = c.V.Rb,
                            g = Bd(a);
                        d = e.C("rqnl", 0) + 1;
                        e.D("rqnl", d);
                        if (e = n(g, H(".", [f, "browserInfo"]))) e.rqnl = d, ag(a);
                        b()
                    },
                    ra: function(c, b) {
                        bj(a, c);
                        b()
                    }
                }
            }, 1);
            Cb(we, 100);
            ba("1", we, 100);
            X.push(Ks);
            ba("n", Le, 1);
            ba("n", De, 2);
            ba("n", Kb(), 3);
            ba("n", we, 100);
            Ca.n = ib;
            ya.n = kc;
            hc({
                Ge: {
                    ea: "accurateTrackBounce"
                }
            });
            X.push(Ls);
            Ca.m = Kd("cm");
            ya.m = us;
            ba("m", Kb(["u", "v", "vf"]), 1);
            ba("m", we, 2);
            hc({
                Hg: {
                    ea: "clickmap"
                }
            });
            X.push(Ms);
            X.push(Ns);
            X.push(Os);
            X.push(Ps);
            (function() {
                X.push(Qs);
                Ue.push("ecommerce");
                hc({
                    od: {
                        ea: "ecommerce",
                        Ua: function(a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            })();
            X.push(Rs);
            ub.push(Ts);
            X.push(Us);
            Ue.push("user_id");
            Ec.push(E("p.st", Vs));
            X.push(Ws);
            Cb(function(a, c) {
                return {
                    ra: function(b, d) {
                        var e = Ha(a, c);
                        e = e && e.userParams;
                        var f = (b.V || {}).ze;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            ae.push(xs);
            X.push(Zs);
            X.push($s);
            We.push(function(a) {
                var c = I(a);
                c.C("i") || (c.D("i", !0), ja(a).F(a, ["message"], w(a, up)))
            });
            (function() {
                var a, c = (a = {}, a.tp = v(qb, gk, Ib), a.tpid = v(qb, cr), a);
                z(Fe, c)
            })();
            Cb(td, 20);
            ba("n", td, 20);
            ba("1", td, 20);
            (function() {
                var a;
                Xi.push("impressions", "click", "promoView", "promoClick");
                var c = (a = {}, a.promotion_name = "name", a.promotion_id = "id", a.item_id = "product_id", a.item_name = "product_name", a);
                yd.view_item_list = {
                    event: "impressions",
                    ya: ec
                };
                yd.select_item = {
                    event: "click",
                    Ia: "products",
                    ya: ec
                };
                yd.view_promotion = {
                    event: "promoView",
                    Ia: "promotions",
                    ya: c
                };
                yd.select_promotion = {
                    event: "promoClick",
                    Ia: "promotions",
                    ya: c
                }
            })();
            X.push(function(a, c) {
                var b;
                return b = {}, b.ecommerceAdd = E("ecm.a", at(a, c)), b.ecommerceRemove = E("ecm.r", bt(a, c)), b.ecommerceDetail =
                    E("ecm.d", ct(a, c)), b.ecommercePurchase = E("ecm.p", dt(a, c)), b
            });
            (function() {
                var a, c = {};
                c.bu = lt;
                c.pri = cp;
                c.wv = w(2, P);
                c.ds = fp;
                c.co = function(b) {
                    return Gb(I(b).C("jn"))
                };
                c.td = nt;
                z(c, (a = {}, a.iss = v(Xr, Ib), a.hdl = v(Yr, Ib), a.iia = v(Zr, Ib), a.cpf = v(kt, Ib), a.ntf = x(function(b) {
                    a: switch (n(b, "Notification.permission")) {
                        case "denied":
                            b = !1;
                            break a;
                        case "granted":
                            b = !0;
                            break a;
                        default:
                            b = null
                    }
                    return Ua(b) ? null : b ? 2 : 1
                }), a.eu = lc("isEU"), a.ns = Yk, a.np = function(b) {
                    if (Wa(b, 0, 100)) b = null;
                    else {
                        b = nb(Pf(b), 100);
                        for (var d = [], e = 0; e <
                            b.length; e++) {
                            var f = b.charCodeAt(e);
                            128 > f ? d.push(f) : (127 < f && 2048 > f ? d.push(f >> 6 | 192) : (d.push(f >> 12 | 224), d.push(f >> 6 & 63 | 128)), d.push(f & 63 | 128))
                        }
                        b = Yh(d)
                    }
                    return b
                }, a));
                z(Fe, c)
            })();
            (function() {
                var a = {};
                a.hc = lc("hc");
                a.oo = lc("oo");
                a.pmc = lc("cmc");
                a.lt = function(c) {
                    var b = Pd(c).C("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.re = v(Aq, Ib);
                a.aw = function(c) {
                    c = wb(v(ia, Wb), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return ia(c) ? null : Gb(!c)
                };
                a.yu = function(c) {
                    var b = S(c).hostname;
                    return L(b, ["dzen.ru",
                        "ya.ru"
                    ]) ? (ed(c, "").C("yandexuid") || "").substring(0, 25) : null
                };
                a.ifc = lc("ifc");
                a.ifb = lc("ifb");
                a.ecs = lc("ecs");
                a.csi = lc("scip");
                z(kg, a)
            })();
            ya.er = $c;
            (function(a) {
                try {
                    var c = eh(a, "er"),
                        b = Zo(a, c);
                    dk.push(function(d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[ua.fb] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) {}
            })(window);
            (function() {
                ae.push(bp);
                jg.unshift(Yo);
                jh.push(function(a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    I(a).D("oo", c)
                })
            })();
            Cb(function(a,
                c) {
                return {
                    M: function(b, d) {
                        var e = b.H,
                            f = b.K;
                        !nl[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp, nl[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            X.push(st);
            Sb.e = Tb;
            Ca.e = ib;
            ya.e = kc;
            hc({
                exp: {
                    ea: "experiments"
                }
            });
            sk.experiments = "ex";
            (function() {
                var a;
                hf.push(tt);
                Ca.f = ib;
                z(ya, (a = {}, a.f = $k, a));
                ba("f", Kb(), 1);
                ba("f", vj, 2);
                ba("f", td, 20)
            })();
            ae.push(function(a, c) {
                var b = {
                        oa: N(c),
                        hd: Ha(a, c),
                        Zf: da(a),
                        Pd: Na(a)
                    },
                    d = b.Zf(jb);
                if (!b.Pd.Hd) {
                    var e = b.Pd.C("ymoo" + b.oa);
                    if (e && 30 > d - e) b = b.oa, delete I(a).C("counters", {})[b], Ta(Sa("uws"));
                    else qa(c,
                        ut(b))["catch"](D(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = [Ab];
                z(ya, (a = {}, a.s = b, a.S = b, a.u = $c, a));
                z(Ca, (c = {}, c.s = Vb, c.S = ib, c.u = Vb, c));
                ba("s");
                ba("u");
                ba("S", Kb(["v", "hid", "u", "vf", "rn"]), 1);
                X.push(E("s", Lo))
            })();
            Ca["8"] = Vb;
            ya["8"] = [ig];
            Zk.push([ig, 0]);
            X.push(E("p.us", function(a, c) {
                return qa(c, function(b) {
                    var d, e = n(b, "settings.sbp");
                    if (e) return ui(a, b, {
                        gb: c,
                        Mc: "8",
                        data: z({}, e, (d = {}, d.c = c.id, d)),
                        Nd: "cs"
                    })
                })
            }));
            ba("p", Kb(kh), 1);
            Xc("pub", function(a, c) {
                var b = ji(a, c);
                return {
                    M: function(d, e) {
                        b(d, "8", "5", "", "wv-part");
                        e()
                    }
                }
            }, 1);
            Ca.p = vt;
            ya.p = Oa([zb, Ab]);
            ub.push(zt);
            hc({
                Ab: {
                    ea: "webvisor",
                    Ua: Boolean
                },
                Ng: {
                    ea: "disableFormAnalytics",
                    Ua: Boolean
                }
            });
            ba("4", Kb(kh), 1);
            Ca["4"] = ol;
            ya["4"] = Oa([zb, Ab, Qc]);
            ub.push(Ft);
            (function() {
                ba("W", Kb(kh), 1);
                Xc("wv", On, 1);
                ya.W = Oa([zb, Ab]);
                Ca.W = ol;
                ub.push(pu);
                X.push(qu);
                hc({
                    Ab: {
                        ea: "webvisor"
                    }
                });
                hc({
                    Ni: {
                        ea: "trustedDomains"
                    },
                    dc: {
                        ea: "childIframe",
                        Ua: Boolean
                    }
                });
                jh.push(function(a) {
                    I(a).C("stopRecorder", C)()
                })
            })();
            X.push(su);
            ba("pi");
            Ca.pi = Vb;
            ya.pi = $c;
            Xc("w", function(a, c) {
                return {
                    M: function(b, d) {
                        if (b.K) {
                            var e =
                                zl(c),
                                f = e.status;
                            "rt" === e.Mc && f && (b.K.D("rt", f), b.ga || (b.ga = {}), b.ga.Fh = 1 === f ? Uh(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            X.push(uu);
            X.push(Fu);
            ya["6"] = Oa([zb, Ab]);
            Ca["6"] = Vb;
            X.push(Gu);
            X.push(ot);
            (function() {
                Xg.push(function(a, c) {
                    c.informer = Um(a)
                })
            })();
            Cb(tf, 6);
            ba("1", tf, 6);
            ba("adb");
            ba("n", tf, 4);
            ya.adb = $c;
            Ca.adb = Rj;
            Ec.push(Iu);
            ya["5"] = kc;
            Ca["5"] = ib;
            Sb["5"] = Z(v(Oc, yc([Le, De]), Wb), Tb);
            X.push(Ju);
            ba("5", td, 20);
            Cb(Nh, 7);
            ba("n", Nh, 6);
            ub.push(Ku);
            Ca.d = ib;
            ba("d", Kb(["hid", "u", "v", "vf"]), 1);
            ya.d = $c;
            ba("n", function(a, c) {
                return {
                    ra: function(b,
                        d) {
                        if (!b.V || !b.V.force) {
                            var e = .002,
                                f = c.id === ua.pg ? 1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = Qf(a);
                            if (p && U(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var q = {}, r = {}, u = {}, t = Sm(), B = S(a).href, Q = 0; Q < p.length; Q += 1) {
                                    var O = p[Q],
                                        ka = O.name.replace(/^https?:\/\//, "").split("?")[0],
                                        wa = sc(ka),
                                        yb = (g = {}, g.dns = Math.round(O.domainLookupEnd - O.domainLookupStart), g.tcp = Math.round(O.connectEnd - O.connectStart), g.duration = Math.round(O.duration),
                                            g.response = Math.round(O.responseEnd - O.requestStart), g);
                                    "script" !== O.initiatorType || e || (r[ka] = z(yb, (h = {}, h.name = O.name, h.decodedBodySize = O.decodedBodySize, h)));
                                    !Mh[wa] && !t[wa] || q[ka] || f || (q[ka] = z(yb, (k = {}, k.pages = B, k)))
                                }
                                ea(q).length && (u.timings8 = q);
                                ea(r).length && (u.scripts = r);
                                if (ea(u).length) ta(a, "d", c)({
                                    K: Ja((l = {}, l.ar = 1, l.pv = 1, l)),
                                    aa: {
                                        ca: kb(a, u) || void 0
                                    },
                                    H: (m = {}, m["page-url"] = B, m)
                                }, {
                                    id: ua.sg,
                                    Z: "0"
                                })["catch"](D(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            ya.ci = [Ab];
            Ca.ci = Vb;
            ub.push(E("p.sci", function(a, c) {
                return qa(c,
                    w(a, Rm))["catch"](D(a, "ins.cs"))
            }));
            X.push(Lu);
            ub.push(jt);
            X.push(Qu);
            Cb(uh, 8);
            ba("f", uh, 3);
            ba("n", uh, 5);
            Ec.push(function(a) {
                return E("fip", function(c) {
                    if (!fl(c) || Md(c)) {
                        var b = Na(c);
                        if (!b.C("fip")) {
                            var d = v(gb(v(function(e, f) {
                                return E("fip." + f, e)(c)
                            }, G(xr, null))), rd("-"))(a);
                            b.D("fip", d)
                        }
                    }
                })
            }([Su, Ru, function(a) {
                    var c = n(a, "ApplePaySession"),
                        b = S(a).protocol;
                    a = c && "https:" === b && !db(a) ? c : void 0;
                    c = "";
                    if (!a) return c;
                    try {
                        c = "" + a.canMakePayments();
                        b = "";
                        var d = a.supportsVersion;
                        if (U(d))
                            for (var e = 1; 20 >= e; e += 1) b +=
                                d.call(a, e) ? "" + e : "0";
                        return b + c
                    } catch (f) {
                        return c
                    }
                }, function(a) {
                    a = n(a, "navigator") || {};
                    return a.doNotTrack || a.msDoNotTrack || "unknown"
                }, function(a) {
                    if (a = ht(a)) try {
                        for (var c = [], b = 0; b < gl.length; b += 1) {
                            var d = a(gl[b]);
                            c.push(d)
                        }
                        var e = c
                    } catch (f) {
                        e = []
                    } else e = [];
                    return e ? H("x", e) : ""
                }, function(a) {
                    var c = void 0;
                    void 0 === c && (c = Ou);
                    var b = n(a, "navigator") || {};
                    c = A(w(b, n), c);
                    c = H("x", c);
                    try {
                        var d = n(a, "navigator.getGamepads");
                        var e = La(d, "getGamepads") && a.navigator.getGamepads() || []
                    } catch (f) {
                        e = []
                    }
                    return c + "x" + Pa(e)
                },
                Mu,
                function(a) {
                    a = n(a, "screen") || {};
                    return H("x", A(w(a, n), Nu))
                },
                function(a) {
                    return H("x", vm(a) || [])
                },
                function(a) {
                    a = Mm(a);
                    return ca(a) ? H("x", a) : a
                },
                function(a) {
                    return (a = Om(a)) ? v(Or, Ug(P), gb(F(["", ["matches", "media"]], xm)), w("x", H))(a) : ""
                }
            ]));
            Cb(function(a) {
                return {
                    M: function(c, b) {
                        var d = c.K,
                            e = Na(a).C("fip");
                        e && d && (d.D("fip", e), de(c, "fip", Gb(e)));
                        b()
                    }
                }
            }, 9);
            ba("h", function(a) {
                return {
                    ra: function(c, b) {
                        var d = c.wi;
                        te(c) && d && I(a).D("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            Ec.push(nu);
            We.push(Tu);
            ub.push(Yu);
            X.push(Zu);
            hc({
                Xi: {
                    ea: "yaDisableGDPR"
                },
                Yi: {
                    ea: "yaGDPRLang"
                }
            });
            jg.push(function(a, c) {
                return {
                    M: F([a, c], im)
                }
            });
            og.push("gdpr", "gdpr_popup");
            ng.push(function(a, c) {
                var b = ce(a);
                b = jf(b);
                if (Z(yc(bv), b).length) return !0;
                b = c(a, "gdpr");
                return L(b, [Fc, av])
            });
            (function() {
                og.push("_ym_debug_build");
                hm("init", function(a, c) {
                    var b = "1" === c.Z,
                        d = fg(c);
                    return db(a) || b || d || !cv(a) ? !1 : !0
                })
            })();
            Cb(Jl, 5);
            ba("1", Jl, 6);
            ya.c = $c;
            Ca.c = Vb;
            Xc("w", ef, 3);
            Xc("cm", ef, 1);
            Xc("wv", ef, 1);
            ba("h", function(a) {
                return {
                    M: function(c, b) {
                        te(c) ? El(a).then(Rl,
                            Ul).then(function(d) {
                            c.H || (c.H = {});
                            c.H.uah = d;
                            b()
                        }, b) : b()
                    }
                }
            }, 7);
            (function() {
                function a(c) {
                    var b = tc("canvas", c.document);
                    if (b && (b = Jc(b))) {
                        var d = Ke(c) || Tc(c),
                            e = d[0];
                        d = d[1];
                        if (.3 <= Jj(c, b, {
                                h: d,
                                w: e
                            }) / d * e) return I(c).D("hc", 1), !0
                    }
                    return !1
                }
                X.push(E("hcp", function(c) {
                    a(c) || W(c, w(c, a), 3E3)
                }))
            })();
            ub.push(E("p.ot", fv));
            X.push(function(a, c) {
                var b = Gl(a),
                    d = N(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.Jh = !0;
                if (b = e.Tf) d = Hl(a), y(d, b)
            });
            We.push(function(a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = Hl(a);
                    ze(a,
                        b,
                        function(e) {
                            e.za.F(d)
                        }, !0)
                }
            });
            if (window.Ya && bf) {
                var Kl = ua.fc;
                window.Ya[Kl] = bf;
                ys(window);
                y(v(Rc([window, window.Ya[Kl]]), ha), Xg)
            }
            y(v(Rc([window]), ha), We)
        })()
    } catch (bf) {};
}).call(this)