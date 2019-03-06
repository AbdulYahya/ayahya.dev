import CMS from "netlify-cms"

import AboutPagePreview from "./preview-templates/AboutPreview"
import HomePagePreview from "./preview-templates/HomePreview"
import MeetupPreview from "./preview-templates/MeetupPreview"
import FooterPreview from "./preview-templates/FooterPreview"
import NavbarPreview from "./preview-templates/NavbarPreview"
import PastMeetupsPagePreview from "./preview-templates/PastMeetupsPreview"

CMS.registerPreviewTemplate("meetups", MeetupPreview)
CMS.registerPreviewTemplate("footer", FooterPreview)
CMS.registerPreviewTemplate("navbar", NavbarPreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("past-meetups", PastMeetupsPagePreview)
