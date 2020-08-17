import React from 'react';
import styled from 'styled-components';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Wrapper from 'Components/Wrapper';
import Modals from 'Components/Modals';

import { Helmet } from 'react-helmet';

const Title = styled.h1`
  font-family: Gilroy;
  font-size: 32px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin: 0 0 16px;
`;

const WrapperContent = styled.div`
  text-align: left;
  padding: 32px 0 0;
`;

const Section = styled.section`
  margin-bottom: 32px;
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: #7a7f95;
    margin: 0 0 20px;
  }

  h2 {
    font-family: Gilroy;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    color: #ffffff;
    margin: 0 0 8px;
  }
`;

const pageTitle = `Sample page`;

function SamplePage() {
  console.log('render SamplePage');
  return (
    <React.Fragment>
      <Helmet>
        <title>Sample - {pageTitle}</title>
      </Helmet>
      <Header />
      <main>
        <Wrapper>
          <WrapperContent>
            <Section>
              <Title>{pageTitle}</Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ultrices velit et placerat dignissim. Phasellus vitae tortor
                arcu. Cras sollicitudin in libero non viverra. Sed hendrerit
                libero in lectus tempor, a mollis sem accumsan. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Sed vitae lectus et ipsum condimentum
                rutrum. Nunc tellus felis, condimentum eu ultrices vitae,
                fermentum sed tortor. Duis ut mattis urna. Cras bibendum
                tristique arcu, a pellentesque massa ultrices et. Suspendisse
                imperdiet fringilla facilisis. Vivamus lacus metus, euismod eu
                urna eu, efficitur tempor velit. Fusce vitae odio vel dui
                dignissim viverra vel vel arcu. Proin fringilla posuere arcu,
                commodo elementum tellus suscipit non. Vivamus faucibus volutpat
                eros ut mollis. Morbi sit amet mauris sagittis, cursus turpis
                sit amet, efficitur nibh.
              </p>
              <h2>Nam ut mauris enim.</h2>
              <p>
                Aenean pharetra porta consequat. Nullam tincidunt augue quis
                magna tempus, tincidunt lacinia odio venenatis. Nulla venenatis
                blandit nibh, ut imperdiet nibh pretium ut. Aliquam lorem nunc,
                rutrum eget nunc et, consequat mattis turpis. Vivamus fringilla
                ipsum facilisis, fringilla tellus non, semper nibh. Aenean
                sagittis auctor ante in mattis. Nam quis venenatis purus.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Nunc eleifend sem quam, a venenatis
                tellus consectetur vel. Pellentesque porta vehicula augue, sed
                finibus massa aliquet sed.
              </p>
              <p>
                Phasellus commodo neque metus, rhoncus bibendum risus varius a.
                Nulla nulla diam, faucibus at viverra nec, bibendum quis odio.
                Donec iaculis sagittis elit, condimentum imperdiet ligula
                hendrerit sit amet. Maecenas tincidunt in odio quis tincidunt.
                Nulla elementum est maximus placerat interdum. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur erat felis, volutpat pharetra dui
                sit amet, congue fringilla dolor. Nam felis justo, bibendum eu
                purus id, finibus euismod leo. Donec elementum tortor leo, et
                porttitor ipsum dictum in. Phasellus congue nisl enim, vel
                maximus ante feugiat lacinia. Aenean porta turpis ornare erat
                mollis, ut finibus elit accumsan. Donec ut rutrum libero.
                Phasellus sagittis, sapien blandit volutpat venenatis, lacus
                orci dignissim diam, vel accumsan tortor urna laoreet risus.
                Aliquam erat volutpat.
              </p>
              <p>
                Suspendisse lobortis quis felis id semper. Mauris ultrices
                dignissim leo. Cras eget vehicula dui, efficitur ornare nulla.
                Sed eu lacinia metus. Quisque consequat eu metus nec rutrum.
                Maecenas sed ullamcorper ante. Pellentesque molestie sagittis
                elit quis interdum. Nullam ultricies lacinia turpis, non
                pulvinar urna. Donec eu vulputate nisi, eu iaculis ante.
                Maecenas ac lacinia nulla.
              </p>
              <p>
                Praesent vulputate risus at nisi imperdiet accumsan. Sed at arcu
                sapien. Etiam commodo mauris neque, vel luctus velit efficitur
                vitae. Nam sit amet porta erat. Pellentesque placerat augue
                pretium euismod convallis. Quisque pretium commodo dui, feugiat
                facilisis quam rutrum non. Praesent tincidunt mauris dolor, et
                dictum magna ultrices at. Maecenas nec libero posuere, vulputate
                erat id, finibus eros. Suspendisse faucibus leo a quam tempus,
                id iaculis eros pellentesque.
              </p>
            </Section>
          </WrapperContent>
        </Wrapper>
      </main>
      <Footer />
      <Modals />
    </React.Fragment>
  );
}

export default SamplePage;
