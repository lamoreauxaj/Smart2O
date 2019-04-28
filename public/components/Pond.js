export default{
    name: "Pond",
    template: '<canvas width="100%" id="pondCanvas"></canvas>',
    data() {
        return {
            tadpoles: undefined,
            context: undefined
        }
    },
    mounted() {
        
        const n = Math.floor(Math.random() * 250), v = 15, m = 10
        const width = document.getElementById("pondCanvas").width
        const height = document.getElementById("pondCanvas").height
        this.context = document.getElementById("pondCanvas").getContext("2d")
        const context = this.context
        context.lineJoin = "round"
        context.lineCap = "round"
        
        this.tadpoles = new Array(n).fill().map(() => ({
          vx: (Math.random() - 0.5) * v,
          vy: (Math.random() - 0.5) * v,
          px: new Array(m).fill(Math.random() * width),
          py: new Array(m).fill(Math.random() * height),
          count: 0
        }))
        
        setInterval(() => {
          context.clearRect(0, 0, width, height)
          
          for (const t of this.tadpoles) {
            let dx = t.vx
            let dy = t.vy
            let x = t.px[0] += dx
            let y = t.py[0] += dy
            let speed = Math.sqrt(dx * dx + dy * dy)
            const count = speed * 10
            const k1 = -5 - speed / 3
            
            if (x < 0 || x > width) t.vx *= -1
            if (y < 0 || y > height) t.vy *= -1
            
            for (var j = 1; j < m; ++j) {
              const vx = x - t.px[j];
              const vy = y - t.py[j];
              const k2 = Math.sin(((t.count += count) + j * 3) / 300) / speed;
              t.px[j] = (x += dx / speed * k1) - dy * k2;
              t.py[j] = (y += dy / speed * k1) + dx * k2;
              speed = Math.sqrt((dx = vx) * dx + (dy = vy) * dy);
            }
              
            // Head
            context.save();
            context.translate(t.px[0], t.py[0]);
            context.rotate(Math.atan2(t.vy, t.vx));
            context.beginPath();
            context.ellipse(0, 0, 6.5, 4, 0, 0, 2 * Math.PI);
            context.fill();
            context.restore();
            
            // Body
            context.beginPath();
            context.moveTo(t.px[0], t.py[0]);
            for (let i = 1; i < 3; ++i) context.lineTo(t.px[i], t.py[i]);
            context.lineWidth = 4;
            context.stroke();
            
            // Tail
            context.beginPath();
            context.moveTo(t.px[0], t.py[0]);
            for (let i = 1; i < m; ++i) context.lineTo(t.px[i], t.py[i]);
            context.lineWidth = 2;
            context.stroke();
            }
        }, 40);
    }
    
}