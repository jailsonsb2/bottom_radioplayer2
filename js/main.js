!function() {
    "use strict";
    let _ = document.querySelectorAll("[data-outside]")
      , $ = "is-active";
    _.forEach(_=>{
        !function _(e) {
            if (!e)
                return;
            let t = document.getElementById(e.dataset.outside);
            if (!t)
                return;
            e.addEventListener("click", ()=>{
                e.classList.toggle($),
                t.classList.toggle($)
            }
            );
            let r = _=>{
                t.contains(_.target) || e.contains(_.target) || (e.classList.remove($),
                t.classList.remove($))
            }
            ;
            document.addEventListener("click", r);
            let l = t.querySelector("[data-close]");
            l && (l.onclick = function() {
                e.classList.remove($),
                t.classList.remove($)
            }
            )
        }(_)
    }
    );
    let e = {}
      , t = {
        play: '<svg class="icon-play" viewBox="0 0 24 28"><path d="M22.5 11.5A3 3 0 0122.5 16.5L4.5 27.5A3 3 0 010 25V3A3 3 0 014.5.5Z"></path></svg>',
        pause: '<svg class="icon-pause" viewBox="0 0 20 24"><path d="M0 3a3 3 0 013-3H5a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3zM12 3a3 3 0 013-3H17a3 3 0 013 3v18a3 3 0 01-3 3H15a3 3 0 01-3-3z"></path></svg>',
        facebook: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>',
        twitter: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"><path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path></svg>',
        instagram: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"><path d="M13.0281 2.00098C14.1535 2.00284 14.7238 2.00879 15.2166 2.02346L15.4107 2.02981C15.6349 2.03778 15.8561 2.04778 16.1228 2.06028C17.1869 2.10944 17.9128 2.27778 18.5503 2.52528C19.2094 2.77944 19.7661 3.12278 20.3219 3.67861C20.8769 4.23444 21.2203 4.79278 21.4753 5.45028C21.7219 6.08694 21.8903 6.81361 21.9403 7.87778C21.9522 8.14444 21.9618 8.36564 21.9697 8.58989L21.976 8.78397C21.9906 9.27672 21.9973 9.8471 21.9994 10.9725L22.0002 11.7182C22.0003 11.8093 22.0003 11.9033 22.0003 12.0003L22.0002 12.2824L21.9996 13.0281C21.9977 14.1535 21.9918 14.7238 21.9771 15.2166L21.9707 15.4107C21.9628 15.6349 21.9528 15.8561 21.9403 16.1228C21.8911 17.1869 21.7219 17.9128 21.4753 18.5503C21.2211 19.2094 20.8769 19.7661 20.3219 20.3219C19.7661 20.8769 19.2069 21.2203 18.5503 21.4753C17.9128 21.7219 17.1869 21.8903 16.1228 21.9403C15.8561 21.9522 15.6349 21.9618 15.4107 21.9697L15.2166 21.976C14.7238 21.9906 14.1535 21.9973 13.0281 21.9994L12.2824 22.0002C12.1913 22.0003 12.0973 22.0003 12.0003 22.0003L11.7182 22.0002L10.9725 21.9996C9.8471 21.9977 9.27672 21.9918 8.78397 21.9771L8.58989 21.9707C8.36564 21.9628 8.14444 21.9528 7.87778 21.9403C6.81361 21.8911 6.08861 21.7219 5.45028 21.4753C4.79194 21.2211 4.23444 20.8769 3.67861 20.3219C3.12278 19.7661 2.78028 19.2069 2.52528 18.5503C2.27778 17.9128 2.11028 17.1869 2.06028 16.1228C2.0484 15.8561 2.03871 15.6349 2.03086 15.4107L2.02457 15.2166C2.00994 14.7238 2.00327 14.1535 2.00111 13.0281L2.00098 10.9725C2.00284 9.8471 2.00879 9.27672 2.02346 8.78397L2.02981 8.58989C2.03778 8.36564 2.04778 8.14444 2.06028 7.87778C2.10944 6.81278 2.27778 6.08778 2.52528 5.45028C2.77944 4.79194 3.12278 4.23444 3.67861 3.67861C4.23444 3.12278 4.79278 2.78028 5.45028 2.52528C6.08778 2.27778 6.81278 2.11028 7.87778 2.06028C8.14444 2.0484 8.36564 2.03871 8.58989 2.03086L8.78397 2.02457C9.27672 2.00994 9.8471 2.00327 10.9725 2.00111L13.0281 2.00098ZM12.0003 7.00028C9.23738 7.00028 7.00028 9.23981 7.00028 12.0003C7.00028 14.7632 9.23981 17.0003 12.0003 17.0003C14.7632 17.0003 17.0003 14.7607 17.0003 12.0003C17.0003 9.23738 14.7607 7.00028 12.0003 7.00028ZM12.0003 9.00028C13.6572 9.00028 15.0003 10.3429 15.0003 12.0003C15.0003 13.6572 13.6576 15.0003 12.0003 15.0003C10.3434 15.0003 9.00028 13.6576 9.00028 12.0003C9.00028 10.3434 10.3429 9.00028 12.0003 9.00028ZM17.2503 5.50028C16.561 5.50028 16.0003 6.06018 16.0003 6.74943C16.0003 7.43867 16.5602 7.99944 17.2503 7.99944C17.9395 7.99944 18.5003 7.43954 18.5003 6.74943C18.5003 6.06018 17.9386 5.49941 17.2503 5.50028Z"></path></svg>',
        youtube: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"><path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path></svg>',
        tiktok: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"><path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path></svg>',
        whatsapp: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"><path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"></path></svg>',
        telegram: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"><path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L8.90378 13.1628C9.48351 15.0767 9.77337 16.0337 9.77337 16.0337C9.88564 16.3442 10.04 16.3996 10.2273 16.3743C10.4145 16.3489 10.5139 16.2476 10.6361 16.1297C10.6361 16.1297 11.0324 15.7472 11.825 14.9823L14.3759 16.8698C14.8407 17.1266 15.1763 16.9941 15.2917 16.4377L16.9495 8.61641C17.1325 7.88842 16.8115 7.59644 16.247 7.82754L6.51397 11.5871C5.84996 11.854 5.85317 12.2255 6.39308 12.3911L8.89113 13.1708Z"></path></svg>',
        mute: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px"><path d="M5.88889 16.0001H2C1.44772 16.0001 1 15.5524 1 15.0001V9.00007C1 8.44778 1.44772 8.00007 2 8.00007H5.88889L11.1834 3.66821C11.3971 3.49335 11.7121 3.52485 11.887 3.73857C11.9601 3.8279 12 3.93977 12 4.05519V19.9449C12 20.2211 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16.0001ZM20.4142 12.0001L23.9497 15.5356L22.5355 16.9498L19 13.4143L15.4645 16.9498L14.0503 15.5356L17.5858 12.0001L14.0503 8.46454L15.4645 7.05032L19 10.5859L22.5355 7.05032L23.9497 8.46454L20.4142 12.0001Z"></path></svg>',
        volumeUp: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px"><path d="M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"></path></svg>'
    }
    
    
      , r = async(_,$,t,r,l="spotify")=>{
        let s;
        s = null === _ || _ === $ ? `${$}` : `${_} - ${$}`;
        let a = s.toLowerCase();
        if (e[a])
            return e[a];
        let o = `https://api-v2.streamafrica.net/musicsearch?query=${encodeURIComponent(s)}&service=${l.toLowerCase()}`
          , i = await fetch(o);
        if (403 === i.status) {
            let n = {
                title: $,
                artist: _,
                art: t,
                cover: r
            };
            return e[a] = n,
            n
        }
        let C = i.ok ? await i.json() : {};
        if (!C.results) {
            let c = {
                title: $,
                artist: _,
                art: t,
                cover: r
            };
            return e[a] = c,
            c
        }
        let u = C.results
          , L = {
            //title: u.title || $,
            //artist: u.artist || _,
            title: $,
            artist: _,
            thumbnail: u.artwork.small || t,
            art: u.artwork.medium || t,
            cover: u.artwork.large || r,
            album: u.album
        };
        return e[a] = L,
        L
    }
      , l = async(_,$,t,r)=>{
        let l = (_,$)=>_.replace(/100x100/, $), s;
        s = _ === $ ? `${$}` : `${_} - ${$}`;
        let a = s.toLowerCase();
        if (e[a])
            return e[a];
        let o = await fetch(`https://itunes.apple.com/search?limit=1&term=${encodeURIComponent(s)}`);
        if (403 === o.status)
            return {
                title: $,
                artist: _,
                art: t,
                cover: r
            };
        let i = o.ok ? await o.json() : {};
        if (!i.results || 0 === i.results.length)
            return {
                title: $,
                artist: _,
                art: t,
                cover: r
            };
        let n = i.results[0]
          , C = {
            //title: n.trackName || $,
            //artist: n.artistName || _,
            title: $,
            artist: _,
            thumbnail: n.artworkUrl100 || t,
            art: n.artworkUrl100 ? l(n.artworkUrl100, "600x600") : t,
            cover: n.artworkUrl100 ? l(n.artworkUrl100, "1000x1000") : r
        };
        return e[a] = C,
        C
    }
    ;
    async function s({artist: _, title: $, art: e, cover: t, service: s}) {
        let a = {};
        return "spotify" === s ? await r(_, $, e, t, s) : await l(_, $, e, t)
    }
    let a = document.querySelector(".player-button-play")
      , o = new Audio;
    function i(_, $=null) {
        $ && (_.src = $),
        _.load(),
        _.play(),
        a.innerHTML = t.pause,
        a.classList.add("is-active"),
        document.body.classList.add("is-playing")
    }
    function n(_) {
        _.pause(),
        a.innerHTML = t.play,
        a.classList.remove("is-active"),
        document.body.classList.remove("is-playing")
    }
    null !== a && a.addEventListener("click", async()=>{
        o.paused ? i(o) : n(o)
    }
    );
    let C = document.querySelector(".player-volume")
      , c = document.querySelector(".player-range-fill")
      , u = document.querySelector(".player-range-wrapper")
      , L = document.querySelector(".player-range-thumb")
      , d = document.querySelector(".player-button-volume-toggle")
      , v = localStorage.getItem("volume") || 100
      , p = !0;
    function h(_) {
        p ? c.style.height = `${_}%` : c.style.width = `${_}%`
    }
    function y(_) {
        let $ = p ? u.offsetHeight - L.offsetWidth : u.offsetWidth - L.offsetWidth
          , e = _ / 100 * $;
        p ? L.style.bottom = `${e}px` : L.style.left = `${e}px`
    }
    function m(_) {
        C.value = _,
        h(_),
        y(_),
        localStorage.setItem("volume", _),
        o.volume = _ / 100
    }
    function f(_) {
        let $ = C.getBoundingClientRect()
          , e = p ? _.clientY - $.top : _.clientX - $.left
          , t = e / C.offsetWidth * 100;
        t = Math.max(0, Math.min(100, t = p ? 100 - t : t));
        let r = Math.round((C.max - C.min) * (t / 100)) + parseInt(C.min);
        m(r)
    }
    null !== C && (m(v),
    C.addEventListener("input", _=>{
        m(_.target.value)
    }
    ),
    L.addEventListener("mousedown", ()=>{
        document.addEventListener("mousemove", f)
    }
    )),
    document.addEventListener("mouseup", ()=>{
        document.removeEventListener("mousemove", f)
    }
    ),
    window.addEventListener("resize", ()=>{
        let _ = C.value;
        h(_),
        y(_)
    }
    );
    let g = new ResizeObserver(()=>{
        c.removeAttribute("style"),
        L.removeAttribute("style"),
        p = u.offsetWidth < 100;
        let _ = C.value;
        h(_),
        y(_)
    }
    );
    g.observe(u),
    null !== d && d.addEventListener("click", ()=>{
        o.volume > 0 ? (m(0),
        d.innerHTML = t.mute) : (m(100),
        d.innerHTML = t.volumeUp)
    }
    );
    let w = document.querySelector(".app-newplayer")
      , k = document.querySelector(".player")
      , H = document.querySelector(".player-cover-image")
      , x = document.querySelector(".player-fullscreen")
      , M = document.querySelectorAll(".socials")
      , E = document.querySelectorAll(".song-name")
      , S = document.querySelectorAll(".song-artist")
      , q = document.querySelector(".player-modal-image")
      , Z = document.querySelector(".player-title")
      , b = window?.streams?.timeRefresh || 1e4;
    x.addEventListener("click", ()=>{
        k.classList.toggle("is-fullscreen"),
        w.classList.toggle("is-fullscreen"),
        x.classList.toggle("is-active")
    }
    ),
    !function _() {
        let $, e, r = window.streams || {}, l = r.station;
        o.src = l.stream_url,
        l.social && M && M.forEach(_=>{
            Object.keys(l.social).forEach($=>{
                _.appendChild(function _($, e) {
                    let r = document.createElement("a");
                    return r.classList.add("player-social-item"),
                    r.href = $,
                    r.target = "_blank",
                    r.innerHTML = t[e],
                    r
                }(l.social[$], $))
            }
            )
        }
        ),
        !function _() {
            $ && clearTimeout($);
            let t = "https://twj.es/get_stream_title/?url=" + encodeURIComponent(l.stream_url);
            fetch(t).then(_=>_.json()).then(async _=>{
                let $ = _.song;
                if (e !== $) {
                    e = $;
                    let t = _.artist
                      , r = l.album
                      , a = l.cover
                      , o = await s({
                        artist: t,
                        title: $,
                        art: r,
                        cover: a,
                        service: l.service || "itunes"
                    });
                    (function _($) {
                        if (E.forEach(_=>{
                            _.textContent = $.title
                        }
                        ),
                        S.forEach(_=>{
                            _.textContent = $.artist
                        }
                        ),
                        Z.scrollWidth > Z.offsetWidth) {
                            Z.classList.add("is-scrolling");
                            let e = Z.scrollWidth - Z.offsetWidth;
                            Z.setAttribute("style", `--text-scroll: -${e}px`)
                        } else
                            Z.classList.remove("is-scrolling"),
                            Z.removeAttribute("style");
                        let t = k.querySelector(".player-artwork");
                        if (t) {
                            let r = document.createElement("img");
                            r.src = $.art,
                            r.width = 600,
                            r.height = 600,
                            r.addEventListener("load", ()=>{
                                t.appendChild(r),
                                setTimeout(()=>{
                                    t.querySelectorAll("img").forEach(_=>{
                                        _.style.transform = `translateX(${-_.width}px)`,
                                        _.addEventListener("transitionend", ()=>{
                                            t.querySelectorAll("img:not(:last-child)").forEach(_=>{
                                                _.remove()
                                            }
                                            ),
                                            _.style.transition = "none",
                                            _.style.transform = "none",
                                            setTimeout(()=>{
                                                _.removeAttribute("style")
                                            }
                                            , 1e3)
                                        }
                                        )
                                    }
                                    )
                                }
                                , 100)
                            }
                            )
                        }
                        if (H || q) {
                            let l = new Image;
                            l.src = $.cover || $.art,
                            l.addEventListener("load", ()=>{
                                H.style.opacity = 0,
                                q.style.opacity = 0,
                                H.addEventListener("transitionend", ()=>{
                                    H.src = $.cover || $.art,
                                    q.src = $.cover || $.art,
                                    H.style.opacity = 1,
                                    q.style.opacity = 1
                                }
                                )
                            }
                            )
                        }
                    }
                    )(o),
                    function _($) {
                        let {title: e, artist: t, album: r, art: l} = $;
                        "mediaSession"in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
                            title: e,
                            artist: t,
                            album: r,
                            artwork: [{
                                src: l,
                                sizes: "512x512",
                                type: "image/png"
                            }]
                        }),
                        navigator.mediaSession.setActionHandler("play", ()=>{
                            i()
                        }
                        ),
                        navigator.mediaSession.setActionHandler("pause", ()=>{
                            n()
                        }
                        ))
                    }(o)
                }
            }
            ).catch(_=>console.log(_)),
            $ = setTimeout(_, b)
        }()
    }()
}();

