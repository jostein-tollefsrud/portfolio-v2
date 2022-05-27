import AvatarFull from '@/components/AvatarFull';
import AvatarSmall from '@/components/AvatarSmall';
import ContactForm from '@/components/ContactForm';
import FormSocialList from '@/components/FormSocialList';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import { getBase64ImageUrl } from 'src/utils/base64';

interface Props {
  plantmanagerImg: any;
  bachelorImg: any;
  portfolioImg: any;
}

const Home: NextPage<Props> = ({
  plantmanagerImg,
  bachelorImg,
  portfolioImg,
}) => {
  return (
    <div>
      <Head>
        <title>Hi there, my name is Jostein</title>
        <meta
          name='description'
          content='My name is Jostein Tollefsrud. I am 27 years, from a small place called Odnes. Just finished a three years bachelor degree in web development from the Norwegian University of Science and Technology (NTNU).'
        />
      </Head>
      <main id='maincontent'>
        <section className='section-hero'>
          <div className='section-hero--left'>
            <div>
              <h1 className='heading-primary u-margin-bottom-medium'>
                Hi there, my name is Jostein
              </h1>
              <p className='text-sub u-margin-bottom-large'>
                I am a fullstack web developer with a passion for clean code.
              </p>
              <div className='hero__button-container'>
                <Link href='#projects'>
                  <a className='btn btn--red '>My PROJECTS</a>
                </Link>
                <span className='blob'></span>
              </div>
            </div>
          </div>

          <div className='section-hero--right'>
            <div>
              <AvatarFull />
            </div>
          </div>
        </section>

        {/* #### PROJECTS #### */}
        <ProjectsSection
          plantmanagerImg={plantmanagerImg}
          bachelorImg={bachelorImg}
          portfolioImg={portfolioImg}
        />

        {/* #### ABOUT #### */}
        <AboutSection />

        {/* #### CONTACT #### */}
        <section id='contact' className='section-contact'>
          <h2 className='heading-secondary u-text-center u-margin-bottom-large'>
            Get in touch
          </h2>
          <div className='section-contact__container'>
            <div className='contact-flex'>
              <div className='color'></div>
              <div className='content-avatar'>
                <AvatarSmall />
              </div>
              <div className='contact-flex--left'>
                <p className='text-sub'>
                  If you want to contact me you can use the form or one of the
                  listed items
                </p>
                <FormSocialList />
              </div>

              <div className='contact-flex--right'>
                <div className='form-avatar'>
                  <AvatarSmall />
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const plantmanagerImgSrc = process.env.CLOUDINARY_PLANTMANAGER_IMAGE_SRC;
  const bachelorImgSrc = process.env.CLOUDINARY_BACHELOR_IMAGE_SRC;
  const portfolioImgSrc = process.env.CLOUDINARY_PORTFOLIO_IMAGE_SRC;
  if (!plantmanagerImgSrc || !bachelorImgSrc || !portfolioImgSrc) {
    throw new Error('Missing CLOUDINARY_EXAMPLE_IMAGE_SRC env variable');
  }

  const plantmanagerImgSrcblurDataUrl = await getBase64ImageUrl(
    plantmanagerImgSrc
  );

  const bachelorImgSrcblurDataUrl = await getBase64ImageUrl(bachelorImgSrc);

  const portfolioImgSrcblurDataUrl = await getBase64ImageUrl(portfolioImgSrc);

  return {
    props: {
      plantmanagerImg: {
        src: plantmanagerImgSrc,
        blurDataUrl: plantmanagerImgSrcblurDataUrl,
      },
      bachelorImg: {
        src: bachelorImgSrc,
        blurDataUrl: bachelorImgSrcblurDataUrl,
      },
      portfolioImg: {
        src: portfolioImgSrc,
        blurDataUrl: portfolioImgSrcblurDataUrl,
      },
    },
  };
}

export default Home;
