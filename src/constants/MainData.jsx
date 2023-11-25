const PersonalInfo = [
    /* Personal Details */
    {
      name: 'text1',
      default: 'Josephine Myers',
      label: 'fullname',
      type: 'text',
      placeholder: 'First and Last name',
      outStyle: 'text-xl leading-loose font-black'
    },
    {
      name: 'text2',
      label: 'Emailinput',
      default: 'JosephineMyers@mailadd.com',
      type: 'email',
      placeholder: 'Enter Email',
      outStyle: 'font-light text-xs'
    },
    {
      name: 'text3',
      label: 'Phone:',
      default: '20804820840',
      type: 'tel',
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{1}",
      placeholder: 'Enter Phone Number',
      outStyle: 'font-light text-xs'
    },
    {
      name: 'text4',
      label: 'Address:',
      default: 'London, UK',
      type: 'text',
      placeholder: 'Enter Address',
      outStyle: 'font-light text-xs border-b border-black'
    },

];

const ExperienceInfo = [
    /* Experience Info */
    {
      name: 'text11',
      label: 'Position Title',
      default: 'Underwriter',
      type: 'text',
      placeholder: 'Enter Position Title',
      outStyle: 'basis-full font-light text-base'
    },
    {
      name: 'text10',
      label: 'Company Name',
      default: 'Umbrella Inc.',
      type: 'text',
      placeholder: 'Enter Company Name',
      outStyle: ' font-light text-sm'
    },
    {
      name: 'text12',
      label: 'Start Date',
      default: '11/08',
      type: 'text',
      placeholder: 'Enter Start Date',
      outStyle: 'font-light text-sm'
    },
    {
      name: 'text13',
      label: 'End Date',
      default: '11/08',
      type: 'text',
      placeholder: 'Enter End Date',
      outStyle: 'font-light text-sm'
    },
    /* {
      name: 'text14',
      label: 'Location',
      default: 'London City University',
      type: 'text',
      placeholder: 'Enter Location',
      outStyle: 'font-light text-sm'
    }, */
    {
      name: 'text15',
      label: 'Description',
      default: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
      placeholder: 'Enter Description',
      outStyle: 'flex-2 font-light text-xs'
    },
  ];


const EducationInfo = [
  /* Education Info */
  {
    name: 'text5',
    label: 'School',
    default: 'London City University',
    type: 'text',
    placeholder: 'Enter School / University',
    outStyle: 'basis-6/12 text-sm'
  },
  {
    name: 'text9',
    label: 'Location',
    default: 'New York City, US',
    type: 'text',
    placeholder: 'Enter Location',
    outStyle: 'basis-6/12 text-xs'
  },
  {
    name: 'text6',
    label: 'Degree',
    default: 'Bachelors in Economics',
    type: 'text',
    placeholder: 'Enter Degree / Field Of Study',
    outStyle: 'basis-3/6 text-xs'
  },
  {
    name: 'text7',
    label: 'Start Date',
    default: '11/08',
    type: 'text',
    format: 'MM-dd',
    placeholder: 'Enter Start Date',
    outStyle: 'basis-1/6 text-xs'
  },
  {
    name: 'text8',
    label: 'End Date',
    default: '11/08',
    type: 'text',
    placeholder: 'Enter End Date',
    outStyle: 'basis-1/6 text-xs'
  }
];

  export {PersonalInfo, EducationInfo, ExperienceInfo};