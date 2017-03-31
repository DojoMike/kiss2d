using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kiss2D
{
    public class GameObject : IDrawable, IPausable
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public int Speed { get; set; }

        /// <summary>
        /// Checks for collisions with other instances
        /// </summary>
        /// <param name="other">Any other instance</param>
        /// <returns>True if the 2 objects collide, false otherwise</returns>
        public bool Collision(GameObject other)
        {
            return (X <= other.X + other.Width &&
                X + Width >= other.X &&
                Y <= other.Y + other.Height &&
                Height + Y >= other.Y);
        }
        
        #region Interface implementations
        public virtual void Draw(){}
        public virtual void Pause(){}
        #endregion
    }
}
