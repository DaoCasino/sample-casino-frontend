import React from 'react';

export const items = [
  {
    question: 'Nulla ac neque et tellus vehicula auctor et id nisl?',
    answer: (
      <>
        Nulla ac neque et tellus vehicula auctor et id nisl. Etiam consequat
        feugiat laoreet. Vestibulum neque purus, imperdiet sed dolor in, iaculis
        tempus justo. Morbi faucibus ex arcu, vitae congue sapien gravida quis.
        Maecenas porttitor cursus rutrum. Donec cursus semper ex, ut tempus
        ipsum tincidunt id. Pellentesque volutpat leo at dui consectetur, eu
        elementum sem dignissim. Vivamus sagittis semper enim, non tristique
        eros. Suspendisse sodales sit amet neque sit amet porta. Nulla at
        faucibus mi, eget ultricies lorem. Quisque eget nunc aliquet, vestibulum
        nisi vel, sodales eros. Nam rhoncus lacus orci. Aliquam maximus
        porttitor tortor vitae dictum. Curabitur vehicula sodales nisl, ut
        fermentum augue cursus quis. Nullam in pharetra nibh, id laoreet libero.
      </>
    ),
    id: 1,
    footer: true,
  },
  {
    question: 'Duis quis ipsum sed est malesuada aliquam?',
    answer: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
        bibendum nibh, consequat dignissim nisl. Nulla auctor felis et lacus
        porttitor ultrices. Suspendisse auctor urna mi, at porta enim posuere
        quis. Duis quis ipsum sed est malesuada aliquam. Nunc viverra
        pellentesque orci ut luctus. Nulla vehicula erat non lorem euismod
        efficitur. Maecenas blandit feugiat neque, nec tincidunt elit fringilla
        sed. Phasellus sodales sapien at risus posuere, ac luctus elit ornare.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Nunc ut porttitor sapien, ac sagittis ipsum. Ut quis
        commodo lectus.
      </>
    ),
    id: 2,
    footer: true,
  },
  {
    question: 'Nulla at faucibus mi, eget ultricies lorem.?',
    answer: (
      <>
        Nulla ac neque et tellus vehicula auctor et id nisl. Etiam consequat
        feugiat laoreet. Vestibulum neque purus, imperdiet sed dolor in, iaculis
        tempus justo. Morbi faucibus ex arcu, vitae congue sapien gravida quis.
        Maecenas porttitor cursus rutrum. Donec cursus semper ex, ut tempus
        ipsum tincidunt id. Pellentesque volutpat leo at dui consectetur, eu
        elementum sem dignissim. Vivamus sagittis semper enim, non tristique
        eros. Suspendisse sodales sit amet neque sit amet porta. Nulla at
        faucibus mi, eget ultricies lorem. Quisque eget nunc aliquet, vestibulum
        nisi vel, sodales eros. Nam rhoncus lacus orci. Aliquam maximus
        porttitor tortor vitae dictum. Curabitur vehicula sodales nisl, ut
        fermentum augue cursus quis. Nullam in pharetra nibh, id laoreet libero.
      </>
    ),
    id: 3,
    footer: true,
  },
];

export const menuItems = items.filter((item) => item.footer === true);
