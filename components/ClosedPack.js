import _JSXStyle from 'styled-jsx/style'
export default function ClosedPack(props) {
  let animateStyle = (
    <style jsx>{`
      .animation {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 478px;
        width: 550px;
        animation: zoom 0.5s linear forwards, spin 0.4s ease-in forwards;
        animation-delay: 0.9s, 1.4s;
      }
      @keyframes zoom {
        100% {
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
          transform: scale(1.2)
        }
      }
      @keyframes spin {
        0% {
          transform: scale(1.2)
        }
        100% {
          transform: scale(1.2) rotate(50deg) translateX(1000px);
        }
      }
      .paper-wrapper {
        height: 350px;
        width: 250px;
        background-image: url('static/wrapper-center.png')
      }
      .paper {
        height: 100%;
        width: 100%;
        position: relative;
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
          lightblue 0%,
          lightblue 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
      }
      .corner__blockout-topright {
        background-image: -webkit-linear-gradient(
          135deg,
          lightblue 0%,
          lightblue 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
        right: 0;
      }
      .corner__blockout-bottomleft {
        background-image: -webkit-linear-gradient(
          -45deg,
          lightblue 0%,
          lightblue 50%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0) 100%
        );
        bottom: 0;
      }
      .corner__blockout-bottomright {
        background-image: -webkit-linear-gradient(
          225deg,
          lightblue 0%,
          lightblue 50%,
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
        animation: unfold-corner-topleft 0.3s linear forwards;
        animation-delay: 0.3s;
        background-image: url('static/corner-topleft.png')
      }
      .corner-topright {
        right: 0;
        top: 0;
        transform: rotate3d(-1, 1, 0, 90deg);
        animation: unfold-corner-topright 0.3s linear forwards;
        animation-delay: 0.3s;
        background-image: url('static/corner-topright.png')
      }
      .corner-bottomleft {
        left: 0;
        bottom: 0;
        transform: rotate3d(-1, 1, 0, 90deg);
        animation: unfold-corner-bottomleft 0.3s linear forwards;
        animation-delay: 0.3s;
        background-image: url('static/corner-bottomleft.png');
      }
      .corner-bottomright {
        right: 0;
        bottom: 0;
        transform: rotate3d(1, 1, 0, 90deg);
        animation: unfold-corner-bottomright 0.3s linear forwards;
        animation-delay: 0.3s;
        background-image: url('static/corner-bottomright.png');
      }
      .corner::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 5;
      }

      .corner-topleft::before {

      }

      .corner-topright::before {

      }
      .corner-bottomleft::before {

      }

      .corner-bottomright::before {

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


      /* top css */
      .foldup {
        height: 64px;
        width: 250px;
        position: absolute;
        left: 0;
        opacity: 1;
        transform: rotate3d(1, 0, 0, 90deg);
        z-index: 3;
      }
      .top-foldup {
        top: 0;
        transform-origin: top;
        animation: unfold-top 0.3s linear forwards;
        background: url('static/foldup.png')
      }
      .bottom-foldup {
        bottom: 0;
        transform-origin: bottom;
        animation: unfold-bottom 0.3s linear forwards;
        background: url('static/folddown.png');
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
          hsla(0, 0%, 0%, 0.05) 0%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }
      .bottom-foldup::before {
        bottom: 0;
        background: -webkit-linear-gradient(
          90deg,
          hsla(0, 0%, 0%, 0.05) 0%,
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
        height: 478px;
        position: absolute;
        top: -64px;
      }

      .foldout-left {
        width: 154px;
        left: 0;
        animation: unfold-left 0.3s linear forwards;
        animation-delay: 0.6s;
        transform-origin: left;
        transform: rotate3d(0, 1, 0, 90deg);
        background-image: url('static/foldout-left.png')
      }
      .foldout-right {
        width: 150px;
        right: 0;
        background: white;
        animation: unfold-right 0.3s linear forwards;
        animation-delay: 0.6s;
        transform-origin: right;
        transform: rotate3d(0, -1, 0, 90deg);
        background-image: url('static/foldout-right.png')
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
          hsla(0, 0%, 0%, 0.05) 0%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }
      .foldout-right::before {
        background: -webkit-linear-gradient(
          180deg,
          hsla(0, 0%, 0%, 0.05) 0%,
          hsla(0, 0%, 0%, 0) 100%
        );
      }
      @keyframes unfold-left {
        100% {
          transform: rotate3d(0, 1, 0, 180deg);
        }
      }
      @keyframes unfold-right {
        0% {
          transform: rotate3d(0, -1, 0, 90deg);
        }
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
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      }
      .paper-wrapper {
        background-image: url('static/wrapper-center.png');
        height: 350px;
        width: 250px;
      }
      .paper-wrapper::before {
        content:'';
        background: -webkit-linear-gradient(
          90deg,
          hsla(0, 0%, 0%, 0.5) 0%,
          hsla(0, 0%, 0%, 0) 2%,
          hsla(0, 0%, 0%, 0) 100%
        );
        height: 100%;
        width: 100%;
        position: absolute;
      }
      .paper {
        height: 100%;
        width: 100%;
      }
      .paper {
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
          <div className="foldout foldout-left"></div>
          <div className="foldout foldout-right" onAnimationEnd={(e) => props.doneAnimation(e)}></div>
        </div>
      </div>
      {props.packState === 'closed' ? staticStyle : animateStyle}
    </div>
)
}
