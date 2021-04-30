// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aqwJS5mn3CpXcnDGVd5VRu
// Component: lQzMbA_XBsQvJ
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: O0n9FMg-sQyxi/component
import TopSection from "../../TopSection"; // plasmic-import: rCJcx1o55zvK3/component
import Section from "../../Section"; // plasmic-import: PcTEvjvGnjwUe/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: ukGayIJV9Ttg8/component
import Testimonial from "../../Testimonial"; // plasmic-import: gjyR5W7314cGj/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 60VMMo_UN4KJe2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: aqwJS5mn3CpXcnDGVd5VRu/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: lQzMbA_XBsQvJ/css

import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: SrR0Yg00Kj10QL/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: GNIu_caPL0ObFW/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: -wEdIN9Kk2MOga/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: uY4P6pzWpW1ebQ/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: zGdRD63EHODDx4/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: IX5PYQT5URl0go/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: uUxvF2OVeYlnip/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: Ht9CrD-o4qUFo5/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: cTtvNg5jPJOEBM/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: NvtADngwT4d-g6/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: v__WAJMt-J_9N2/icon
import simpleProjectD7OnoXfAdLwlkO from "./images/simpleProject.png"; // plasmic-import: D7onoXfADLwlkO/picture
import taskZdPmwxMLt212W from "./images/task.png"; // plasmic-import: zdPmwx-MLt212W/picture

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof TopSection>;
  testimonial?: p.Flex<typeof Testimonial>;
};

export interface DefaultHomeProps {
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__m3U6C)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <TopSection
              data-plasmic-name={"topSection"}
              data-plasmic-override={overrides.topSection}
              className={classNames("__wab_instance", sty.topSection)}
            />

            <Section
              className={classNames("__wab_instance", sty.section__d6XSu)}
              subtitle={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
              }
              title={"Explore the solution"}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__fmiHe)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__pgdQl)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__bs84A
                  )}
                >
                  {"Powerful suite of tools"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__ct1Oq
                  )}
                >
                  {
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                  }
                </div>

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__aUrfp
                  )}
                  description={
                    "The app enables you to invest, just by clicking one button"
                  }
                  iconBack={
                    <LightningIcon
                      className={classNames(defaultcss.all, sty.svg__fFxY3)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"INVEST NOW"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__s25JR
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <HammerIcon
                      className={classNames(defaultcss.all, sty.svg___1DOgs)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"WITHDRAW BITFELIXCOIN"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__xLaOi
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <PencilIcon
                      className={classNames(defaultcss.all, sty.svg__ybelU)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"DEPOSIT BITFELIXCOIN"}
                />
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.box__br5Ec)}>
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__qb369)}
                  role={"img"}
                  src={simpleProjectD7OnoXfAdLwlkO}
                />

                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img___9USuu)}
                  role={"img"}
                  src={taskZdPmwxMLt212W}
                />
              </div>
            </p.Stack>

            <div className={classNames(defaultcss.all, sty.box__e4IUm)}>
              <div className={classNames(defaultcss.all, sty.box__kmfhH)} />

              <Section
                className={classNames("__wab_instance", sty.section__bhPl)}
                subtitle={
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
                title={"How it works"}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__r5Bgw)}
              >
                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__rdxIo
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SwapIcon
                      className={classNames(defaultcss.all, sty.svg__jj2C)}
                      role={"img"}
                    />
                  }
                  title={"Initial Contact"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__x96OS
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SlotIcon
                      className={classNames(defaultcss.all, sty.svg__iCXn)}
                      role={"img"}
                    />
                  }
                  title={"Discovery Session"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__hAyWl
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <CycleIcon
                      className={classNames(defaultcss.all, sty.svg__nJihv)}
                      role={"img"}
                    />
                  }
                  title={"Contracting"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__ho4YC
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <HammerIcon
                      className={classNames(defaultcss.all, sty.svg__zi4Ic)}
                      role={"img"}
                    />
                  }
                  title={"Fast Prototyping"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__aLr2Y
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <PencilIcon
                      className={classNames(defaultcss.all, sty.svg__vFd)}
                      role={"img"}
                    />
                  }
                  title={"Design Phase"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__lNal
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <LightningIcon
                      className={classNames(defaultcss.all, sty.svg__jEnok)}
                      role={"img"}
                    />
                  }
                  title={"Develop & Launch"}
                />
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.box__emk65)} />
            </div>

            <Section
              className={classNames("__wab_instance", sty.section__qthTn)}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__cHMp)}
            >
              <FacebookLogoIcon
                className={classNames(defaultcss.all, sty.svg___2LjQn)}
                role={"img"}
              />

              <TinderLogoIcon
                className={classNames(defaultcss.all, sty.svg__diyry)}
                role={"img"}
              />

              <AirbnbLogoIcon
                className={classNames(defaultcss.all, sty.svg__wOusK)}
                role={"img"}
              />

              <HubspotLogoIcon
                className={classNames(defaultcss.all, sty.svg__rG2Rg)}
                role={"img"}
              />

              <AmazonLogoIcon
                className={classNames(defaultcss.all, sty.svg__v9EW6)}
                role={"img"}
              />
            </p.Stack>

            <Testimonial
              data-plasmic-name={"testimonial"}
              data-plasmic-override={overrides.testimonial}
              className={classNames("__wab_instance", sty.testimonial)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "topSection", "testimonial"],
  header: ["header"],
  topSection: ["topSection"],
  testimonial: ["testimonial"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof TopSection;
  testimonial: typeof Testimonial;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHome__VariantsArgs;
  args?: PlasmicHome__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHome__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    testimonial: makeNodeComponent("testimonial"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */