import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, fontSize, radius } from '../tokens';

type CellValue = '✓' | '✗' | '△';
type FeatureRow = { label: string; values: [CellValue, CellValue, CellValue, CellValue] };

const defaultFeatures: FeatureRow[] = [
  { label: 'Feature 1', values: ['✗', '△', '✗', '✓'] },
  { label: 'Feature 2', values: ['△', '✗', '✗', '✓'] },
  { label: 'Feature 3', values: ['✗', '✗', '△', '✓'] },
  { label: 'Feature 4', values: ['✗', '△', '✗', '✓'] },
];

interface CompetitorTableProps { competitors?: string[]; productName?: string; features?: FeatureRow[]; }

export function CompetitorTable({ competitors = ['Competitor A', 'Competitor B', 'Competitor C'], productName = '[Product]', features = defaultFeatures }: CompetitorTableProps) {
  const allCols = [...competitors, productName];
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #000000', display: 'flex', flexDirection: 'column', gap: 93, padding: '44px 60px 0 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow="Project I - Constraints" title="The team was X, but Y" eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        <div style={{ width: 1452, margin: '0 auto', border: '1px solid #242424', borderRadius: radius.card, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ display: 'flex', background: '#880000', height: 103, alignItems: 'center' }}>
            <div style={{ width: 400 }} />
            {allCols.map((col, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, color: i === allCols.length - 1 ? '#19AFC4' : '#FFFCF9' }}>{col}</span>
              </div>
            ))}
          </div>
          {/* Rows */}
          {features.map((row, ri) => (
            <div key={ri} style={{ display: 'flex', background: ri % 2 === 0 ? '#FFFCF9' : '#FFFFFF', height: 107, alignItems: 'center', borderTop: '1px solid #242424' }}>
              <div style={{ width: 400, paddingLeft: 40, fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.medium, color: '#242424' }}>{row.label}</div>
              {row.values.map((val, ci) => (
                <div key={ci} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 32, color: ci === row.values.length - 1 ? '#19AFC4' : '#242424' }}>{val}</span>
                </div>
              ))}
            </div>
          ))}
          {/* Legend */}
          <div style={{ display: 'flex', gap: 32, padding: '24px', background: '#FFFCF9', borderTop: '1px solid #242424' }}>
            {['✗ Missing', '△ Partial', '✓ Strong'].map((l, i) => (
              <span key={i} style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: fontSize.small, color: '#242424' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
