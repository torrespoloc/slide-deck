import { SlideWrapper } from '../components/SlideWrapper';
import { SlideFooter } from '../components/SlideFooter';
import { SlideHeader } from '../components/SlideHeader';
import { fonts, fontSize, radius } from '../tokens';

interface OrgNode { name: string; role: string; accent?: string; children?: OrgNode[]; }
const defaultRoot: OrgNode = { name: 'Name', role: 'CEO / Founder', accent: '#880000', children: [{ name: 'Name', role: 'Engineering', accent: '#19AFC4' }, { name: 'Name', role: 'Design', accent: '#F9B8F5' }, { name: 'Name', role: 'Product', accent: '#EF8928' }] };

function OrgCard({ node }: { node: OrgNode }) {
  return (
    <div style={{ border: `2px solid ${node.accent ?? '#242424'}`, borderRadius: radius.card, padding: '20px 28px', background: '#FFFCF9', minWidth: 220, textAlign: 'center' }}>
      <div style={{ width: 64, height: 64, borderRadius: '50%', background: node.accent ?? '#242424', margin: '0 auto 12px auto' }} />
      <p style={{ margin: '0 0 4px 0', fontFamily: fonts.display, fontWeight: 600, fontSize: fontSize.medium, color: '#242424' }}>{node.name}</p>
      <p style={{ margin: 0, fontFamily: fonts.body, fontWeight: 400, fontSize: fontSize.small, color: '#666' }}>{node.role}</p>
    </div>
  );
}

export function OrgChartLight({ eyebrow = 'Project I - Context', title = 'Org chart', root = defaultRoot }: { eyebrow?: string; title?: string; root?: OrgNode }) {
  return (
    <SlideWrapper background="#FFFCF9">
      <div style={{ width: 1864, height: 966, background: '#FFFCF9', borderRadius: radius.card, border: '1px solid #242424', display: 'flex', flexDirection: 'column', gap: 60, padding: '44px 60px 44px 60px', boxSizing: 'border-box' }}>
        <SlideHeader eyebrow={eyebrow} title={title} eyebrowColor="#242424" dotColor="#19AFC4" titleColor="#242424" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
          <OrgCard node={root} />
          {root.children && root.children.length > 0 && (
            <>
              <div style={{ width: 2, height: 40, background: '#242424' }} />
              <div style={{ position: 'relative', display: 'flex', gap: 40 }}>
                {root.children.map((child, i) => <OrgCard key={i} node={child} />)}
              </div>
            </>
          )}
        </div>
      </div>
      <SlideFooter color="#242424" linkColor="#242424" />
    </SlideWrapper>
  );
}
