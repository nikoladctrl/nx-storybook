import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BytButtonModule } from '../../button.module';
import { BytButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: BytButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [BytButtonModule],
    }),
  ],
} as Meta<BytButtonComponent>;

const Template: Story<BytButtonComponent> = (args: BytButtonComponent) => ({
  template: `
    <button byt-button [color]="color">Button</button>
  `,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};

export const Negative = Template.bind({});
Negative.args = {
  color: 'negative'
};
