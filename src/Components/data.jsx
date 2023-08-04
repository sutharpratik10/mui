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
  ]

export {shortcode, features, pages};