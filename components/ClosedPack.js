import _JSXStyle from 'styled-jsx/style'
export default function ClosedPack(props) {
  let animateStyle = (
    <style jsx>{`
      .animation {
        display: flex;
        align-items: center;
        justify-items: center;
        position: absolute;
      }
      .paper-wrapper {
        background: white;
        height: 350px;
        width: 250px;
      }
      .paper {
        height: 100%;
        width: 100%;
      }
      .corner__blockout {
        height: 64px;
        width: 64px;
        z-index: 3;
        position: absolute;
      }

      .corner__blockout-topleft {
        background-image: -webkit-linear-gradient(
          45deg,
          #778 0%,
          #778 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
      }
      .corner__blockout-topright {
        background-image: -webkit-linear-gradient(
          135deg,
          #778 0%,
          #778 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
        right: 0;
      }
      .corner__blockout-bottomleft {
        background-image: -webkit-linear-gradient(
          -45deg,
          #778 0%,
          #778 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
        bottom: 0;
      }
      .corner__blockout-bottomright {
        background-image: -webkit-linear-gradient(
          225deg,
          #778 0%,
          #778 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
        right: 0;
        bottom: 0;
      }
      .corner {
        height: 64px;
        width: 64px;
        position: absolute;
        z-index: 4;
      }

      .corner-topleft {
        left: 0;
        top: 0;
        transform: rotate3d(1, 1, 0, 90deg);
        animation: unfold-corner-topleft 0.5s linear forwards;
        animation-delay: 0.2s;
        background-image: -webkit-linear-gradient(
          225deg,
          white 0%,
          white 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
      }
      .corner-topright {
        right: 0;
        top: 0;
        transform: rotate3d(-1, 1, 0, 90deg);
        animation: unfold-corner-topright 0.5s linear forwards;
        animation-delay: 0.2s;
        background-image: -webkit-linear-gradient(
          -45deg,
          white 0%,
          white 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
      }
      .corner-bottomleft {
        left: 0;
        bottom: 0;
        transform: rotate3d(-1, 1, 0, 90deg);
        animation: unfold-corner-bottomleft 0.5s linear forwards;
        animation-delay: 0.2s;
        background-image: -webkit-linear-gradient(
          135deg,
          white 0%,
          white 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
      }
      .corner-bottomright {
        right: 0;
        bottom: 0;
        transform: rotate3d(1, 1, 0, 90deg);
        animation: unfold-corner-bottomright 0.5s linear forwards;
        animation-delay: 0.2s;
        background-image: -webkit-linear-gradient(
          45deg,
          white 0%,
          white 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
      }
      .corner::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 5;
      }

      .corner-topleft::before {
        background: -webkit-linear-gradient(
          225deg,
          hsla(0, 0%, 100%, 025) 0%,
          hsla(0, 0%, 0%, 0.05) 50%,
          hsla(0, 0%, 0%, 0) 50%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }

      .corner-topright::before {
        background: -webkit-linear-gradient(
          -45deg,
          hsla(0, 0%, 100%, 025) 0%,
          hsla(0, 0%, 0%, 0.05) 50%,
          hsla(0, 0%, 0%, 0) 50%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }
      .corner-bottomleft::before {
        background: -webkit-linear-gradient(
          135deg,
          hsla(0, 0%, 100%, 025) 0%,
          hsla(0, 0%, 0%, 0.05) 50%,
          hsla(0, 0%, 0%, 0) 50%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }

      .corner-bottomright::before {
        background: -webkit-linear-gradient(
          45deg,
          hsla(0, 0%, 100%, 025) 0%,
          hsla(0, 0%, 0%, 0.05) 50%,
          hsla(0, 0%, 0%, 0) 50%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }

      @keyframes unfold-corner-topleft {
        100% {
          transform: rotate3d(1, 1, 0, 180deg);
        }
      }
      @keyframes unfold-corner-topright {
        100% {
          transform: rotate3d(-1, 1, 0, 180deg);
        }
      }
      @keyframes unfold-corner-bottomleft {
        100% {
          transform: rotate3d(-1, 1, 0, 180deg);
        }
      }
      @keyframes unfold-corner-bottomright {
        100% {
          transform: rotate3d(1, 1, 0, 180deg);
        }
      }
      .paper {
        background-image: -webkit-linear-gradient(
          hsla(0, 0%, 0%, 0.2),
          hsla(0, 0%, 100%, 0.025)
        );
        position: relative;
        /* overflow: hidden; */
      }

      /* top css */
      .foldup {
        height: 64px;
        width: 250px;
        position: absolute;
        left: 0;
        opacity: 1;
        background: white;
        transform: rotate3d(1, 0, 0, 90deg);
        z-index: 3;
      }
      .top-foldup {
        top: 0;
        transform-origin: top;
        animation: unfold-top 0.2s linear forwards;
      }
      .bottom-foldup {
        bottom: 0;
        transform-origin: bottom;
        animation: unfold-bottom 0.2s linear forwards;
      }
      .foldup::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .top-foldup::before {
        background: -webkit-linear-gradient(
          90deg,
          hsla(0, 0%, 0%, 0.15) 0%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }
      .bottom-foldup::before {
        bottom: 0;
        background: -webkit-linear-gradient(
          90deg,
          hsla(0, 0%, 0%, 0.15) 0%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }
      @keyframes unfold-top {
        100% {
          transform: rotate3d(1, 0, 0, 180deg);
        }
      }
      @keyframes unfold-bottom {
        100% {
          transform: rotate3d(1, 0, 0, 180deg);
        }
      }
      .foldout {
        width: 50%;
        height: 478px;
        position: absolute;
        top: -64px;
        background: white;
      }

      .foldout-left {
        left: 0;
        animation: unfold-left 0.5s linear forwards;
        animation-delay: 0.6s;
        transform-origin: left;
        transform: rotate3d(0, 1, 0, 90deg);
      }
      .foldout-right {
        right: 0;
        animation: unfold-right 0.5s linear forwards;
        animation-delay: 0.6s;
        transform-origin: right;
        transform: rotate3d(0, -1, 0, 90deg);
      }

      .foldout::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
      .foldout-left::before {
        background: -webkit-linear-gradient(
          0deg,
          hsla(0, 0%, 0%, 0.15) 0%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }
      .foldout-right::before {
        background: -webkit-linear-gradient(
          180deg,
          hsla(0, 0%, 0%, 0.15) 0%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }
      @keyframes unfold-left {
        100% {
          transform: rotate3d(0, 1, 0, 180deg);
        }
      }
      @keyframes unfold-right {
        100% {
          transform: rotate3d(0, -1, 0, 180deg);
        }
      }
    `}</style>
  )
  let staticStyle = (
    <style jsx>{`
      .animation {
        display: flex;
        align-items: center;
        justify-items: center;
        position: absolute;
      }
      .paper-wrapper {
        background: white;
        height: 350px;
        width: 250px;
      }
      .paper {
        height: 100%;
        width: 100%;
      }
      .paper {
        background-image: -webkit-linear-gradient(
          hsla(0, 0%, 0%, 0.2),
          hsla(0, 0%, 100%, 0.025)
        );
        position: relative;
        /* overflow: hidden; */
      }

    `}</style>
  )
  return(
    <div className="animation">
      <div className="paper-wrapper">
        <div className="paper">
          <div className="top-foldup foldup">
            <div className="corner__blockout corner__blockout-topleft"></div>
            <div className="corner__blockout corner__blockout-topright"></div>
            <div className="corner corner-topleft"></div>
            <div className="corner corner-topright"></div>
          </div>
          <div className="bottom-foldup foldup">
            <div className="corner__blockout corner__blockout-bottomleft"></div>
            <div className="corner__blockout corner__blockout-bottomright"></div>
            <div className="corner corner-bottomleft"></div>
            <div className="corner corner-bottomright"></div>
          </div>
          <div className="foldout foldout-left" onAnimationEnd={() => props.doneAnimation()}></div>
          <div className="foldout foldout-right"></div>
        </div>
      </div>
      {props.packState === 'closed' ? staticStyle : animateStyle}
    </div>
)
}
