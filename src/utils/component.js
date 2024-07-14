import React from "react";
import { HeroSection } from '@/component/project/HeroSection';
import { Breadcrumb } from '@/component/common/Breadcrumb'
import { About_project } from "@/component/project/About_project";
import { Contact } from "@/component/Contact";
import { Other_project } from "@/component/project/Other_project";
import { Project_image } from "@/component/project/Project_image";
import { Titlebar } from '@/component/common/Titlebar'
const Components = {
  breadcrumb: Breadcrumb,
  titlebar: Titlebar,
  herosection: HeroSection,
  aboutproject: About_project,
  projectimage: Project_image,
  otherproject: Other_project,
  contact: Contact
};

const fn = (block) => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      ...block.props,
    });
  }
  return React.createElement(() => (
    <div>The component {block.component} has not been created yet.</div>
  ));
};

export default fn;
