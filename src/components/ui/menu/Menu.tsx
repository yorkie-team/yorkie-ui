'use client'

import { Menu } from '@ark-ui/react';
import type { ComponentProps } from 'react';
import { styled } from '@/styled/jsx';
import { menu } from '@/styled/recipes';
import { createStyleContext } from '@/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(menu);

export const Root = withProvider(styled(Menu.Root));
export const Content = withContext(styled(Menu.Content), 'content');
export const Positioner = withContext(styled(Menu.Positioner), 'positioner');
export const Arrow = withContext(styled(Menu.Arrow), 'arrow');
export const ArrowTip = withContext(styled(Menu.ArrowTip), 'arrowTip');
export const ContextTrigger = withContext(styled(Menu.ContextTrigger), 'contextTrigger');
export const Item = withContext(styled(Menu.Item), 'item');
export const ItemGroup = withContext(styled(Menu.ItemGroup), 'itemGroup');
export const ItemGroupLabel = withContext(styled(Menu.ItemGroupLabel), 'itemGroupLabel');
export const OptionItem = withContext(styled(Menu.OptionItem), 'optionItem');
export const Separator = withContext(styled(Menu.Separator), 'separator');
export const Trigger = withContext(styled(Menu.Trigger), 'trigger');
export const TriggerItem = withContext(styled(Menu.TriggerItem), 'triggerItem');

export interface RootProps extends ComponentProps<typeof Root> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface PositionerProps extends ComponentProps<typeof Positioner> {}
export interface ArrowProps extends ComponentProps<typeof Arrow> {}
export interface ArrowTip extends ComponentProps<typeof ArrowTip> {}
export interface ContextTrigger extends ComponentProps<typeof ContextTrigger> {}
export interface ItemGroupLabel extends ComponentProps<typeof ItemGroupLabel> {}
export interface ItemGroup extends ComponentProps<typeof ItemGroup> {}
export interface OptionItem extends ComponentProps<typeof OptionItem> {}
export interface Positioner extends ComponentProps<typeof Positioner> {}
export interface Separator extends ComponentProps<typeof Separator> {}
export interface Trigger extends ComponentProps<typeof Trigger> {}
export interface TriggerItem extends ComponentProps<typeof TriggerItem> {}
