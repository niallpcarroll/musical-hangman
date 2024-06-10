# Musical 'Hangman' Game

This project is designed to be an interactive and fun game, based on the traditional 'hangman' game but with specifically musical theme.

Find the link to the site [here](https://niallpcarroll.github.io/musical-hangman/)

![Image of the site depicted on different devices](./assets/readme-images/am_i_responsive.png)

## Contents

- [User Experience](#user-experience)
  - [User Stories](#user-stories)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Wireframes](#wireframes)
- [Features](#features)
  - [General Features on Each page](#general-features-on-each-page)
  - [Future Implementations](#future-implementations)
  - [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
  - [Languages Used](#languages-used)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [Deployment & Local Development](#deployment--local-development)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
    - [How to Fork](#how-to-fork) 
    - [How to Clone](#how-to-clone)
- [Testing](#testing)
- [Credits](#credits)
  - [Content](#content-references)
  - [Media](#media)
  - [Acknowledgments](#acknowledgments)

## User Experience
Musical Hangman is intended to be an easy-to-use, simple and fun game. The design is uncluttered, displaying only what is necessary for the game, making its use self-explanatory. As it is entirely focused on the subject of music, there is a clear educational function to it as it could be used by children and older music students.

### User Stories
The website should be very straightforward for the user - the objective of the game is self-explanatory: there is a keyboard display, indications as to the length of the answer, and a counter for wrong answers. The pop-up gives a clear option to re-start the game.

* The user will see a website whose purpose and function is clear - in this case, providing information about historical walking tours of Galway city.

* The user wants an engaging experience, where the content of the website is clear, consistent and not overloaded with imagery or text.

* The user wants a game which can be played more than once. The JavaScript code currently includes thirty questions and answers, which are chosen at random, so the game can be played multiple times.

## Design
### Colour Scheme
![Image of the colour palette used](./assets/readme-images/galway_colour_scheme.png)

There are two dominant colours throughout the website: #fffafa and #0c2b80. #fffafa (or "Snow") is an off-white shade, and #0c2b80 is a dark blue. Both colours have been chosen to create high contrast between text and backgrounds in order to create visual impact and accessibility to readers. The colour scheme is inverted a number of times: the header and the footer have dark blue text and icons on the #fffafa background, while the main body has #fffafa text on a dark blue background. A degree of transparency is added to the dark blue in order to bring visibility to the background image of Galway while still maintaining readability.

I used [Contrast Grid](https://eightshapes.com) to check compliance of the main colours with WCAG 2.0 minimum contrast. The result is a rating of 12.1, as seen below:

![Screenshot of colour contrast score](./assets/readme-images/eightshapes_contrast.png)

### Typography
The website uses one font throughout: "Philosopher".

![Image of the font used in headings, Philosopher](./assets/readme-images/philosopher_font_heading.png)

The "Philosopher" font is a sans-serif font which is very neat and suitable for both headings and text. It is clear and easy to read, but is not overly formal in its style.

### Imagery
The images used on the website are up-to-date images of Galway, and they are all images of locations which visitors can expect to visit if they take part in a walking tour.

![Screenshot of some of the images on the site](./assets/readme-images/images_screenshot.png)

### Wireframes 
These were the original ideas for the three different sections:

<details open>
<summary>Images of wireframes for mobile devices:</summary>

![Image of the wireframe for mobiles](./assets/readme-images/mobile_wireframe.png)
</details>

***
<details>
<summary>Images of wireframes for tablets:</summary>

![Image of the wireframe for tablets](./assets/readme-images/tablet_wireframe.png)
</details>

***
<details>
<summary>Images of wireframes for large screens:</summary>

![Image of the homepage wireframe for large screens ](./assets/readme-images/home_large_screen.png)
![Image of the gallery wireframe for large screens ](./assets/readme-images/gallery_large_screen.png)
![Image of the contact wireframe for large screens ](./assets/readme-images/contact_large_screen.png)
</details>

***

## Features
This website contains three pages:
- Home page
- Gallery page
- Contact page

### General Features on each page
**The header**, which displays the name of the website, sticks to the top of the viewport. On smaller screens there is a dropdown menu from a "burger" icon, which the user can employ to navigate to other pages on the website. On larger screens the dropdown menu opens out across the header, providing clear navigation buttons. Here is an image of the header with the opened menu as it appears on a mobile device:

<details open>
<summary>Screenshot of the Header</summary>

![Screenshot of the website's header](./assets/readme-images/galway_header.png)
</details>

**The footer** contains links to Facebook, YouTube and Instagram to encourage visitors to keep in contact via social media. It provides easy access to social media links for users as it is stuck to the bottom of the viewport:

<details open>
<summary>Screenshot of the Footer</summary>

![Screenshot of the website's footer](./assets/readme-images/galway_footer.png)
</details>

### The Home page
**The Home page** aims to give the visitor clear information about the walking history tours, including times and other considerations (e.g. accessibility). It employs two background images of Galway city. These images are in black and white - apart from giving an appropriate "antiquated" feel, they do not distract the viewer from the main content, thus avoiding a visual overload.

On larger screens the text divs are ordered so as to be slightly offset from each other - this is to avoid the screen appearing too text-heavy, while also revealing different sections of the background image as the user scrolls through the page. On larger screens, the "Home" button in the menu is underlined. On smaller screens, the text areas appear in a single column - however, the light-coloured border is designed to give emphasis to the individual text areas to avoid the impression that there is one single block of text. The icons and the headings give a clear focus to the content of each text area.

<details open>
<summary>Screenshot of the Home page</summary>

![Screenshot of the website's landing page](./assets/readme-images/galway_landing_page.png)
</details>

### The Gallery page
**The Gallery page** is designed to give the visitor a preview of some of the historical sites they will visit in the course of the walk. With the aim of encouraging viewers to visit the sites in person, there is some text beneath each image which asks a question which will be answered on the tour.

On smaller devices, the images appear in a single column, increasing to two columns and then three for larger screens. On larger screens, the "Gallery" button in the menu is underlined. The background colour for the gallery page is dark blue (#0c2b80) - there is no black and white image of Galway employed as in the home and contact pages in order to avoid the gallery page being too cluttered with layers of imagery. However, with the use of the background colour (#0c2b80) and the light-coloured (#fffafa) image borders, the page remains stylistically consistent with the other pages of the website.

<details open>
<summary>Screenshot of the Gallery page</summary>

![Screenshot of the website's gallery page](./assets/readme-images/galway_gallery_page.png)
</details>

### The Contact page
**The Contact page** is designed to engage visitors, giving them the option to make an enquiry or to sign up for newsletters or details of occasional related events.

As with the home page, the contact page utilises a black and white image for the background, while the text of the contact section lies on a transparent dark blue area. On larger screens, the "Contact Us" button is underlined when the user is on this page. A hover feature on larger screens highlights the name and e-mail address input areas, while the colours of the "submit" button are reversed when the cursor is hovered over the button. 

<details open>
<summary>Screenshot of the Contact page</summary>

![Screenshot of the website's contact page](./assets/readme-images/galway_contact_page.png)
</details>

### The Confirmation page
**The Confirmation page** is a page to which the user will be taken after they submit the contact form. It has the same general style as the other pages, and the text will confirm that their message has been submitted successfully. It is designed to automatically return the user to the home page in ten seconds.

<details>
<summary>Screenshot of Confirmation page</summary>

![Screenshot of the website's confirmation page](./assets/readme-images/galway_confirmation.png)
</details>

### The Error page
**The Error page** will appear if a page does not load or if the user attempts to access a non-existent page on the website. This page is styled in the same general way as the rest of the website, and the message which appears provides a link through which the user can return to the homepage.

<details>
<summary>Screenshot of Error 404 page</summary>

![Screenshot of the website's error 404 page](./assets/readme-images/error_page.png)
</details>

### Responsive Design
The website is designed to be responsive throughout - the design changes to be more compatible depending on which screen size the visitor uses. On mobile devices, content appears in a single column, whereas on larger devices the content of the home page spreads out to take up more of the available space, and the gallery images arrange into columns to increase their visibility.

### Future Implementations
There is plenty of potential for future development of this website. Some features that are planned but not yet executed are:
- The possibility of a comments / review section. 
- The possibility of an additional page with images and information of seasonal / occasional tours which might interest visitors.
- The possibility of an additional page containing little-known facts about specific elements of Galway's history to further encourage uptake of the tours.

### Accessibility
The website is designed to be accessible. Measures taken to ensure this include:
- Design which aims to minimise clutter, avoiding overload of images and text.
- High colour contrast between background and text.
- Clearly defined text areas.
- Alt attributes on all images.
- Aria labels on all icons.

## Technologies Used

### Languages Used
This website has been created using HTML and CSS.

### Frameworks, Libraries & Programs Used
+ [Google Fonts](https://fonts.google.com) -  For Philosopher font.

+ Git - For version control.

+ Github - To save & store files and deployment.

+ Gitpod - IDE used to write the code.

+ [Font Awesome](https://www.fontawesome.com) - For icons used in header and footer.

+ [Balsamiq](https://www.balsamiq.com) - For wireframes.

## Deployment & Local Development

### Deployment
Github pages is used to deploy this site. To deploy the site yourself, follow these instructions:

1. Sign in to Github.
2. Go to the repository for this project called [*walking-galway-history*](https://github.com/niallpcarroll/walking-galway-history.git).
3. Click *settings*.
4. In the column to the left, click *pages*.
5. From the dropdown, select *main branch* and then save.
6. The site is now deployed.
### Local Development

#### How to Fork
To fork the repository:

1. Log in to Github.

2. Go to the repository for this project called [*walking-galway-history*](https://github.com/niallpcarroll/walking-galway-history.git).

3. Click the Fork button in the top right corner.
#### How to Clone
1. Log in (or sign up) to GitHub.

2. Go to the repository for this project, [*walking-galway-history*](https://github.com/niallpcarroll/walking-galway-history.git).

3. Click *Code* and choose whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link.

4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.

5. Type the following command in the terminal (after the git clone you will need to paste the link you copied in step 2 above):

      git clone { & THE LINK FROM STEP 2 }

## Testing
### Validator Testing
I have used W3C validator to validate my HTML code and CSS code. I validated them via direct input.
CSS and HTML for all pages passed without errors.

#### HTML Validation
<details open>
<summary>Index/Landing page HTML validation</summary> 

![Screenshot of Index page W3C validation](./assets/readme-images/galway_index_w3c.png)
</details>

<details>
<summary>Gallery page HTML validation</summary>

![Screenshot of Gallery page W3C validation](./assets/readme-images/galway_gallery_w3c.png)
</details>

<details>
<summary>Contact page HTML validation</summary>

![Screenshot of Contact page W3C validation](./assets/readme-images/galway_contact_w3c.png)
</details>

#### CSS Validation
<details open>
<summary>Walking Galway History CSS validation</summary>

![Screenshot of CSS validation for Walking Galway History](./assets/readme-images/css_validation.png)

#### Lighthouse
Lighthouse is a tool created by Google to test a website's performance, accessibility, best practices, SEO and qualification as a progressive web application.

It gives scores on the usability of the website. Tests were carried out for the Home, Gallery and Contact pages for the mobile version and the desktop version. Overall the scores for desktop devices are good, but performance is weaker for mobile devices, most likely due to some images being larger than necessary.

**The scores for a desktop device:**

<details>
<summary>Lighthouse score for Home page</summary>

![Screenshot of the Lighthouse score for home page on desktop](./assets/readme-images/desktop_home_lighthouse.png)
</details>

<details>
<summary>Lighthouse score for Gallery page</summary>

![Screenshot of the Lighthouse score for gallery page on desktop](./assets/readme-images/desktop_gallery_lighthouse.png)
</details>

<details>
<summary>Lighthouse score for Contact page</summary>

![Screenshot of the Lighthouse score for contact page on desktop](./assets/readme-images/desktop_contact_lighthouse.png)
</details>

**The scores for a mobile device:**

<details>
<summary>Lighthouse score for Home page</summary>

![Screenshot of the Lighthouse score for home page on mobile](./assets/readme-images/mobile_home_lighthouse.png)
</details>

<details>
<summary>Lighthouse score for Gallery page</summary>

![Screenshot of the Lighthouse score for gallery page on mobile](./assets/readme-images/mobile_gallery_lighthouse.png)
</details>

<details>
<summary>Lighthouse score for Contact page</summary>

![Screenshot of the Lighthouse score for contact page on mobile](./assets/readme-images/mobile_contact_lighthouse.png)
</details>

#### WAVE
WAVE provides evaluation tools which help authors and web designers make their web content more accessible to people with disabilities. This is the result of testing with WAVE:

![Screenshot of WAVE score result after second test](./assets/readme-images/wave_screenshot.png)

An error appeared after the first test, indicating that a label element was missing text content. This error was corrected by adding an aria label and description to the label element in the navbar section.

### Manual Testing
#### Features
Below is a table with the website's features, detailing how it has been tested and the outcomes of testing:

|Feature|Test case|Outcome|
|---|---|---|
|Header |Scroll through website |Sticks to top of viewport |
|Nav bar - Home |Click |Redirected to home page |
|Nav bar - Gallery |Click |Redirected to Gallery page |
|Nav bar - Contact |Click |Redirected to Contact page |
|Nav bar - Icon (tablets and smaller) |Click |Menu shows |
|Google Maps link |Click |Opens in new tab with location pin |
|Contact links |Click |All redirect to contact page |
|Contact form |Give the required information |Form is successfully sent |
|Contact form |Omit required information |Form does not send; Notification displays |
|Contact form - submit button |Click |Submits form |
|Confirmation page |After clicking submit button |Displays confirmation |
|Confirmation page |10 seconds after displaying |Redirects to home page | 
|Social media link - Facebook |Click |External link to Facebook |
|Social media link - Youtube |Click |External link to Youtube |
|Social media link - Instagram |Click |External link to Instagram |
|Footer |Scroll through website |Sticks to bottom of viewport |
|Error page |Attempt navigation to non-existent page |Error page and message displays |

#### Screen size compability
Below is a table with different devices and the outcomes when visiting the website using different screen sizes.

|Device|Responsive <768px|Responsive 768px to 991px|Responsive 992px to 1919px|Responsive >=1920px| Renders as expected |
|---|---|---|---|---|---| 
|Galaxy S8+ |Yes |n/a |n/a |n/a |Yes |
|iPad Mini |n/a|Yes |n/a |n/a |Yes |
|Laptop (1366px wide) |n/a |n/a |Yes |n/a |Yes |
|Desktop (1920px wide) |n/a |n/a |n/a |Yes |Yes |

#### Browser compability
Below is a table with different browsers which records the result of appearance and responsiveness of the website: 

|Browser|Intended Appearance|Intended Responsiveness|
|---|---|---|
|Chrome |Yes |Yes |
|Firefox |Yes |Yes |
|Edge |Yes |Yes |
|Brave |Yes |Yes |

#### Bugs
A number of bugs were identified during the course of testing. These are outlined below:

| Bug | Section | Fix |
|---|---|---|
| Text input area overflowing outside of div background on small screens | Contact page | Set width property to 100% |
| Unbalanced layout above 2100px | Home page | Additional CSS styling |
| One p element separating from img element on tablet landscape screen | Gallery page | Added break-inside:avoid property to CSS | 

## Credits

### **Content References**
+ The code for the nav bar (along with its responsive CSS styling) and the footer is adapted from the Love Running project (link to Github repository: https://github.com/niallpcarroll/love-running-project.git).

+ [Code Institute](https://codeinstitute.net/ie/) for general HTML and CSS learning material.

+ The code for the hero image below the nav bar is adapted from the tutorial at W3Schools (https://www.w3schools.com/howto/howto_css_hero_image.asp).

+ Guidance on column breaks in CSS came from [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside).

+ My mentor, Dario Carrasquel, gave guidance on creating the Confirmation page with code for automatic return to Home page.
    
+ Apart from references listed above, the code and content of the website is written by myself.

### Media
+ Icons used throughout this website are freely available from [Font Awesome](https://fontawesome.com).

+ [Icons 8](https://icons8.com) for the Favicon image.

+ [Google Maps](https://maps.google.com) for the map linked in the Home page.

+ All images - background photographs and gallery images - are my own.

### Acknowledgments
I wish to acknowledge the support and encouragement given by Code Institute staff, particularly to Amy and to Lewis in Tutor Support, and my peers throughout this project. I also acknowledge the invaluable advice and guidance given by my mentor, Mr Dario Carrasquel.
