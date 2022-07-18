import styled from 'styled-components';

export const ImageErrorViewStyled = styled.div`
  margin-left: auto;
  margin-right: auto;

	& img{
		width: 50vw;
	}

	& p{
		text-align: center;
		font-size: 28px;
		anim
	}

	-webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes zoomInDown {
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
  transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
  -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }
  60% {
  opacity: 1;
  -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
  transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
  -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
  }
  @keyframes zoomInDown {
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
  transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
  -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }
  60% {
  opacity: 1;
  -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
  transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
  -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`