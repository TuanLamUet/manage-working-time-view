type LabelColumn = {
  span: number;
};

type WrapperColoumn = {
  offset?: number;
  span: number;
};

type TailLayout = {
  wrapperCol: WrapperColoumn;
};

type Layout = {
  labelCol: LabelColumn;
  wrapperCol: WrapperColoumn;
};

export const layout: Layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const tailLayout: TailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
