export const Header = () => {
  // const componentName = 'Header';
  const componentName = () => 'Header';
  return (
    <div className="test-wrapper">
      テスト
      このコンポーネントの名前は{componentName()}です。
    </div>
  );
};