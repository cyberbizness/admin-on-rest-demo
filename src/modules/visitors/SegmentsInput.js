import React from 'react';
import { translate } from 'admin-on-rest';
import { SelectInput } from 'admin-on-rest/lib/mui';
import segments from '../../modules/segments/data';

const SegmentsInput = ({ translate, ...rest }) => (
    <SelectInput {...rest} choices={segments.map(segment => ({ id: segment.id, name: translate(segment.name) }))} />
);

const TranslatedSegmentsInput = translate(SegmentsInput);

TranslatedSegmentsInput.defaultProps = {
    addLabel: true,
    addField: true,
    source: 'groups',
};

export default TranslatedSegmentsInput;
