import 'babel/polyfill';

import HelloWorld from "./components/HelloWorld";
import CampaignGallery from "./components/CampaignGallery";

import { renderWithServerProps } from "./utils";

renderWithServerProps('jsx-hello-world', HelloWorld);
renderWithServerProps('jsx-campaign-gallery', CampaignGallery);
