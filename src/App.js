import './App.css';
import RevSlider, { Slide, Caption } from 'react-rev-slider';

function App() {
  return (
    <RevSlider config={config}>
      <Slide
        src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg"
        alt="slidebg1"
        data-bgfit="cover"
        data-bgposition="left top"
        data-bgrepeat="no-repeat"
        slideProperties={{
          'data-transition': "Fly In", 
          'data-slotamount': "7",
          'data-masterspeed': "1500"
        }}
      >   
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="center"
          data-speed="500"
          data-start="1200"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          This is a centered caption
        </Caption>
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="480"
          data-speed="500"
          data-start="1500"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          More details about the slide
        </Caption>
        <Caption
          class="tp-caption tp-button"
          data-x="center"
          data-y="580"
          data-speed="500"
          data-start="1800"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '20px', color: '#fff', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', textAlign: 'center' }}
        >
          <a href="#!" style={{ color: '#fff', textDecoration: 'none' }}>Learn More</a>
        </Caption>
      </Slide>
      <Slide
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="slidebg1"
        data-bgfit="cover"
        data-bgposition="left top"
        data-bgrepeat="no-repeat"
        slideProperties={{
          'data-transition': "slide", // Example animation
          'data-slotamount': "7",
          'data-masterspeed': "1500"
        }}
      >   
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="center"
          data-speed="500"
          data-start="1200"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          This is a centered caption
        </Caption>
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="480"
          data-speed="500"
          data-start="1500"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          More details about the slide
        </Caption>
        <Caption
          class="tp-caption tp-button"
          data-x="center"
          data-y="580"
          data-speed="500"
          data-start="1800"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '20px', color: '#fff', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', textAlign: 'center' }}
        >
          <a href="#!" style={{ color: '#fff', textDecoration: 'none' }}>Learn More</a>
        </Caption>
      </Slide>
      <Slide
        src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg"
        alt="slidebg1"
        data-bgfit="cover"
        data-bgposition="left top"
        data-bgrepeat="no-repeat"
        slideProperties={{
          'data-transition': "boxfade", // Example animation
          'data-slotamount': "7",
          'data-masterspeed': "1500"
        }}
      >   
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="center"
          data-speed="500"
          data-start="1200"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          This is a centered caption
        </Caption>
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="480"
          data-speed="500"
          data-start="1500"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          More details about the slide
        </Caption>
        <Caption
          class="tp-caption tp-button"
          data-x="center"
          data-y="580"
          data-speed="500"
          data-start="1800"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '20px', color: '#fff', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', textAlign: 'center' }}
        >
          <a href="#!" style={{ color: '#fff', textDecoration: 'none' }}>Learn More</a>
        </Caption>
      </Slide>
      <Slide
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="slidebg1"
        data-bgfit="cover"
        data-bgposition="left top"
        data-bgrepeat="no-repeat"
        slideProperties={{
          'data-transition': "slidetoleft", // Example animation
          'data-slotamount': "7",
          'data-masterspeed': "1500"
        }}
      >   
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="center"
          data-speed="500"
          data-start="1200"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          This is a centered caption
        </Caption>
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="480"
          data-speed="500"
          data-start="1500"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          More details about the slide
        </Caption>
        <Caption
          class="tp-caption tp-button"
          data-x="center"
          data-y="580"
          data-speed="500"
          data-start="1800"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '20px', color: '#fff', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', textAlign: 'center' }}
        >
          <a href="#!" style={{ color: '#fff', textDecoration: 'none' }}>Learn More</a>
        </Caption>
      </Slide>
      <Slide
        src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg"
        alt="slidebg1"
        data-bgfit="cover"
        data-bgposition="left top"
        data-bgrepeat="no-repeat"
        slideProperties={{
          'data-transition': "slidetoright", // Example animation
          'data-slotamount': "7",
          'data-masterspeed': "1500"
        }}
      >   
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="center"
          data-speed="500"
          data-start="1200"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          This is a centered caption
        </Caption>
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="480"
          data-speed="500"
          data-start="1500"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          More details about the slide
        </Caption>
        <Caption
          class="tp-caption tp-button"
          data-x="center"
          data-y="580"
          data-speed="500"
          data-start="1800"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '20px', color: '#fff', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', textAlign: 'center' }}
        >
          <a href="#!" style={{ color: '#fff', textDecoration: 'none' }}>Learn More</a>
        </Caption>
      </Slide>
      <Slide
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="slidebg1"
        data-bgfit="cover"
        data-bgposition="left top"
        data-bgrepeat="no-repeat"
        slideProperties={{
          'data-transition': "slideup", // Example animation
          'data-slotamount': "7",
          'data-masterspeed': "1500"
        }}
      >   
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="center"
          data-speed="500"
          data-start="1200"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          This is a centered caption
        </Caption>
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="480"
          data-speed="500"
          data-start="1500"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          More details about the slide
        </Caption>
        <Caption
          class="tp-caption tp-button"
          data-x="center"
          data-y="580"
          data-speed="500"
          data-start="1800"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '20px', color: '#fff', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', textAlign: 'center' }}
        >
          <a href="#!" style={{ color: '#fff', textDecoration: 'none' }}>Learn More</a>
        </Caption>
      </Slide>
      <Slide
        src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg"
        alt="slidebg1"
        data-bgfit="cover"
        data-bgposition="left top"
        data-bgrepeat="no-repeat"
        slideProperties={{
          'data-transition': "slidedown", // Example animation
          'data-slotamount': "7",
          'data-masterspeed': "1500"
        }}
      >   
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="center"
          data-speed="500"
          data-start="1200"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          This is a centered caption
        </Caption>
        <Caption
          class="tp-caption skewfromrightshort fadeout"
          data-x="center"
          data-y="480"
          data-speed="500"
          data-start="1500"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '50px', color: '#fff', textAlign: 'center' }}
        >
          More details about the slide
        </Caption>
        <Caption
          class="tp-caption tp-button"
          data-x="center"
          data-y="580"
          data-speed="500"
          data-start="1800"
          data-easing="Power4.easeOut"
          data-frame_0="x:0;y:50;opacity:0;z:0;"
          data-frame_1="e:Power4.easeInOut;st:500;sp:500;s:500;"
          data-frame_999="o:0;st:2000;sp:1000;s:1000;"
          style={{ fontSize: '20px', color: '#fff', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', textAlign: 'center' }}
        >
          <a href="#!" style={{ color: '#fff', textDecoration: 'none' }}>Learn More</a>
        </Caption>
      </Slide>

    </RevSlider>
  );
}

const config = {
  delay: 9000,
  startwidth: 1170,
  startheight: 800,
  hideThumbs: 10,
  fullWidth: "on",
  forceFullWidth: "on",
  navigation: {
    arrows: {
      enable: true,
      style: 'hesperiden',
    },
    bullets: {
      enable: true,
      style: 'hesperiden',
    }
  }
};

export default App;
