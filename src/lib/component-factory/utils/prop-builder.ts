/**
 * PropBuilder - 코드 생성 시 prop 문자열을 편리하게 구성하는 유틸리티
 *
 * @example
 * const builder = new PropBuilder();
 * builder.add("variant", variant, "default");
 * builder.add("size", size, "default");
 * builder.addFlag("disabled", disabled);
 * builder.addClassName("w-full", fullWidth);
 *
 * const code = `<Button${builder.propsString()}>Click me</Button>`;
 */
export class PropBuilder {
  private props: string[] = [];
  private classNames: string[] = [];

  /**
   * 조건부 prop 추가 (값이 기본값과 다를 때만 추가)
   */
  add(name: string, value: string, defaultValue?: string): this {
    if (defaultValue !== undefined && value === defaultValue) {
      return this;
    }
    this.props.push(`${name}="${value}"`);
    return this;
  }

  /**
   * boolean prop을 flag로 추가 (true일 때만)
   */
  addFlag(name: string, condition?: boolean): this {
    if (condition) {
      this.props.push(name);
    }
    return this;
  }

  /**
   * 조건부 className 추가
   */
  addClassName(className: string, condition?: boolean): this {
    if (condition !== false) {
      this.classNames.push(className);
    }
    return this;
  }

  /**
   * 직접 prop 문자열 추가
   */
  addRaw(propString: string, condition?: boolean): this {
    if (condition !== false) {
      this.props.push(propString);
    }
    return this;
  }

  /**
   * className을 포함한 최종 props 문자열 반환
   * 앞에 공백 포함 (빈 경우 빈 문자열)
   */
  propsString(): string {
    const allProps = [...this.props];

    if (this.classNames.length > 0) {
      allProps.push(`className="${this.classNames.join(" ")}"`);
    }

    if (allProps.length === 0) {
      return "";
    }

    return ` ${allProps.join(" ")}`;
  }

  /**
   * props 배열만 반환 (className 별도 처리 필요 시)
   */
  getProps(): string[] {
    return [...this.props];
  }

  /**
   * className 배열만 반환
   */
  getClassNames(): string[] {
    return [...this.classNames];
  }

  /**
   * 빈 상태인지 확인
   */
  isEmpty(): boolean {
    return this.props.length === 0 && this.classNames.length === 0;
  }

  /**
   * 초기화
   */
  reset(): this {
    this.props = [];
    this.classNames = [];
    return this;
  }
}

/**
 * PropBuilder 인스턴스를 생성하는 헬퍼 함수
 */
export function props(): PropBuilder {
  return new PropBuilder();
}
