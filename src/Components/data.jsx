import 
  { FaList,
    FaMousePointer,
    FaExclamationTriangle,
    FaMagic,
    FaQuoteRight,
    FaLink,
    FaExchangeAlt,
    FaUser,
    FaColumns,
    FaFileExport,
    FaClock,
    FaSortNumericUpAlt,
    FaTable,
    FaDatabase,
    FaCalendar,
    FaLightbulb,
    FaSquareRootAlt,
    FaAt,
    FaTh,
    FaFont,
    FaFontAwesome,
    FaTag,
    FaArrowsAlt,
    FaListOl,
    FaMapMarker,
    FaFileImage,
    FaBars,
    FaEnvelopeOpen,
    FaEllipsisH,
    FaChartPie,
    FaStepForward,
    FaMobile,
    FaServer,
    FaHandPointUp,
    FaMinus,
    FaAlignLeft,
    FaShareAlt,
    FaTasks,
    FaUsers,
    FaComments,
    FaVideo,
    FaComment,
    FaFonticonsFi} 
  from 'react-icons/fa';

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const pages = [
  { name: 'Brand', href: '/brand'},
  { name: 'Blog', href: '/blog'},
  { name: 'Details', href: '/details'},
  { name: 'Feature', href: '/feature'},
  { name: 'CTA', href: '/cta'}
]

const shortcode = [
    { name: 'Accordions', href: '/shortcodes/accordion', icon:  FaList},
    { name: 'Action Box', href: '/shortcodes/actionbox', icon:  FaMousePointer ,},
    { name: 'Alerts and Callouts', href: '/shortcodes/alerts', icon: FaExclamationTriangle },
    { name: 'Animations', href: '/shortcodes/animations', icon: FaMagic},
    { name: 'Blockquotes', href: '/shortcodes/blockquotes', icon:  FaQuoteRight },
    { name: 'Buttons', href: '/shortcodes/buttons', icon: FaLink },
    { name: 'Carousel Slider', href: '/shortcodes/carousel', icon: FaExchangeAlt },
    { name: 'Clients', href: '/shortcodes/clients', icon: FaUser },
    { name: 'Columns', href: '/shortcodes/columns', icon: FaColumns },
    { name: 'Content Box', href: '/shortcodes/contentbox', icon: FaFileExport },
    { name: 'Countdown Timer', href: '/shortcodes/countdown', icon: FaClock },
    { name: 'Counter', href: '/shortcodes/counter', icon: FaSortNumericUpAlt },
    { name: 'Data Table', href: '/shortcodes/datatable', icon: FaTable },
    { name: 'Datatables', href: '/shortcodes/datatables', icon: FaDatabase },
    { name: 'Datepicker', href: '/shortcodes/datepicker', icon: FaCalendar },
    { name: 'Dropcap Highlight', href: '/shortcodes/dropcaphighlight', icon: FaLightbulb },
    { name: 'Feature Box', href: '/shortcodes/featurebox', icon: FaSquareRootAlt },
    { name: 'Form', href: '/shortcodes/form', icon: FaAt },
    { name: 'Gallery', href: '/shortcodes/gallery', icon: FaTh },
    { name: 'Headings', href: '/shortcodes/headings', icon: FaFont },
    { name: 'Icons', href: '/shortcodes/icons', icon: FaFontAwesome },
    { name: 'Labels', href: '/shortcodes/labels', icon: FaTag },
    { name: 'Lightbox', href: '/shortcodes/lightbox', icon: FaArrowsAlt },
    { name: 'Lists Panels', href: '/shortcodes/lightpanels', icon: FaList },
    { name: 'Lists style', href: '/shortcodes/liststyle', icon: FaListOl },
    { name: 'Maps', href: '/shortcodes/maps', icon: FaMapMarker },
    { name: 'Modal Popovers', href: '/shortcodes/modalpopovers', icon: FaFileImage },
    { name: 'Navigation', href: '/shortcodes/navigation', icon: FaBars },
    { name: 'Newsletter', href: '/shortcodes/newsletter', icon: FaEnvelopeOpen },
    { name: 'Pagination', href: '/shortcodes/pagination', icon: FaEllipsisH },
    { name: 'Pie Chart', href: '/shortcodes/piechart', icon: FaChartPie },
    { name: 'Post Style', href: '/shortcodes/poststyle', icon: FaStepForward },
    { name: 'Pricing Tables', href: '/shortcodes/pricingtables', icon: FaMobile },
    { name: 'Process Steps', href: '/shortcodes/processsteps', icon: FaServer },
    { name: 'Responsive Utilities', href: '/shortcodes/responsiveutilities', icon: FaHandPointUp },
    { name: 'Sections', href: '/shortcodes/sections', icon: FaMinus },
    { name: 'Select', href: '/shortcodes/select', icon: FaAlignLeft },
    { name: 'Separators', href: '/shortcodes/separators', icon: FaShareAlt },
    { name: 'Skills', href: '/shortcodes/skills', icon: FaTasks },
    { name: 'Social Icon', href: '/shortcodes/socialicon', icon: FaUsers },
    { name: 'Tabs', href: '/shortcodes/tabs', icon: FaComments },
    { name: 'Team', href: '/shortcodes/team', icon: FaUsers },
    { name: 'Testimonials', href: '/shortcodes/testimonials', icon: FaComment },
    { name: 'Typography', href: '/shortcodes/typography', icon: FaFonticonsFi },
    { name: 'Video & Audio', href: '/shortcodes/videoaudio', icon: FaVideo }
  ];

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
];

const accordionItems  = [
  {
    title: 'consectetur adipiscing elit',
    description:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in ante metus dictum. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Rutrum quisque non tellus orci ac auctor augue mauris augue. Cras ornare arcu dui vivamus arcu felis. Risus in hendrerit gravida rutrum quisque non. Fringilla ut morbi tincidunt augue interdum velit euismod in.Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    status:'',
    area:'panel1',
    ariacontrols:'panel1a-content'
  },
  {
    title: 'Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in ante metus dictum. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Rutrum quisque non tellus orci ac auctor augue mauris augue. Cras ornare arcu dui vivamus arcu felis. Risus in hendrerit gravida rutrum quisque non. Fringilla ut morbi tincidunt augue interdum velit euismod in.',
    status:'',
    area:'panel2',
    ariacontrols:'panel2a-content'
  },
  {
    title: 'Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.',
    description:
      ' Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Sed nisi lacus sed viverra. Et netus et malesuada fames ac turpis egestas sed. Ut ornare lectus sit amet est placerat. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Amet justo donec enim diam vulputate ut. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Sed tempus urna et pharetra pharetra massa massa. Posuere ac ut consequat semper viverra nam libero. In dictum non consectetur a. Neque sodales ut etiam sit.',
    status:'',
    area:'panel3',
    ariacontrols:'panel3a-content'
  },
  {
    title: 'Lacus suspendisse faucibus interdum posuere lorem ipsum.',
    description:
      'Cursus sit amet dictum sit amet justo donec enim. Convallis a cras semper auctor neque vitae tempus. Suspendisse in est ante in nibh mauris cursus mattis. Neque ornare aenean euismod elementum. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Amet dictum sit amet justo donec enim diam vulputate. Odio aenean sed adipiscing diam. At tellus at urna condimentum mattis pellentesque. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Faucibus pulvinar elementum integer enim neque volutpat. Rhoncus aenean vel elit scelerisque mauris pellentesque. Dolor sit amet consectetur adipiscing elit duis. Nunc id cursus metus aliquam. Pharetra pharetra massa massa ultricies mi. Tempus urna et pharetra pharetra massa massa ultricies mi. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus.',
    icon: FingerPrintIcon,
    status:'',
    ariacontrols:'panel4a-content'
  },
];

const dropdownbtn = [
  {
    name: 'Account settings',
    active: true
  },
  {
    name: 'Support',
    active: false
  },
  {
    name: 'License',
    active: false
  },
]

export {shortcode, features, pages, accordionItems, dropdownbtn};