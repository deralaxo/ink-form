import {
  FormFieldManager,
  FormFieldMultiSelect,
  FormFieldValueRendererProps,
  SpecificFormFieldRendererProps,
  TypeOfField,
} from '../types.js';
import React from 'react';
import { Box } from 'ink';
import SelectInput from 'ink-select-input';

export class MultiSelectFormFieldManager implements FormFieldManager<FormFieldMultiSelect> {
  public type: TypeOfField<FormFieldMultiSelect> = 'multiselect';

  public renderField: React.FC<SpecificFormFieldRendererProps<FormFieldMultiSelect>> = props => (
    <Box borderStyle={'round'} width="100%">
      <SelectInput
        items={props.field.options.map(option => ({ value: option.value, label: option.label ?? option.value }))}
        onSelect={option => props.onChange([...(props.value ?? []), option.value as string])}
      />
    </Box>
  );

  public renderValue: React.FC<FormFieldValueRendererProps<FormFieldMultiSelect>> = props => (
    <>
      {props.field.options
        .filter(option => props.value?.includes(option.value))
        ?.map(option => option.label ?? option.value)
        ?.join(', ') ?? 'No value'}
    </>
  );
}
