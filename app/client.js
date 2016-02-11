import { renderWithServerProps } from './utils';

import HelloWorld from './components/HelloWorld';
import Campaign from './components/Campaign';
import CampaignGallery from './components/CampaignGallery';

renderWithServerProps('jsx-hello-world', HelloWorld);
renderWithServerProps('jsx-campaign', Campaign);
renderWithServerProps('jsx-campaign-gallery', CampaignGallery);
